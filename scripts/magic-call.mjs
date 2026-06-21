// Call one Magic MCP tool with params from a JSON file; print full result.
import { spawn } from "node:child_process";
import { readFileSync } from "node:fs";

const tool = process.argv[2];
const paramsFile = process.argv[3];
const params = JSON.parse(readFileSync(paramsFile, "utf8"));

const child = spawn("npx", ["-y", "@21st-dev/magic@latest"], {
  env: { ...process.env, API_KEY: process.env.API_KEY },
  stdio: ["pipe", "pipe", "inherit"],
  shell: true,
});

let buf = "";
const pending = new Map();
let idc = 1;
child.stdout.on("data", (d) => {
  buf += d.toString();
  let i;
  while ((i = buf.indexOf("\n")) >= 0) {
    const line = buf.slice(0, i).trim();
    buf = buf.slice(i + 1);
    if (!line) continue;
    let msg; try { msg = JSON.parse(line); } catch { continue; }
    if (msg.id && pending.has(msg.id)) { pending.get(msg.id)(msg); pending.delete(msg.id); }
  }
});
function send(method, params) {
  const id = idc++;
  const p = new Promise((res) => pending.set(id, res));
  child.stdin.write(JSON.stringify({ jsonrpc: "2.0", id, method, params }) + "\n");
  return p;
}
function notify(method, params) {
  child.stdin.write(JSON.stringify({ jsonrpc: "2.0", method, params }) + "\n");
}

const timeout = setTimeout(() => { console.error("TIMEOUT"); child.kill(); process.exit(1); }, 120000);
await send("initialize", { protocolVersion: "2024-11-05", capabilities: {}, clientInfo: { name: "manual", version: "1.0.0" } });
notify("notifications/initialized", {});
const res = await send("tools/call", { name: tool, arguments: params });
clearTimeout(timeout);

const content = res.result?.content || [];
for (const c of content) {
  if (c.type === "text") process.stdout.write(c.text + "\n");
  else process.stdout.write(JSON.stringify(c) + "\n");
}
if (res.error) console.error("ERROR:", JSON.stringify(res.error));
child.kill();
process.exit(0);
