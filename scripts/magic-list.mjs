// Drive the Magic MCP stdio server directly: handshake + tools/list.
import { spawn } from "node:child_process";

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
    let msg;
    try { msg = JSON.parse(line); } catch { continue; }
    if (msg.id && pending.has(msg.id)) {
      pending.get(msg.id)(msg);
      pending.delete(msg.id);
    }
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

const timeout = setTimeout(() => { console.error("TIMEOUT"); child.kill(); process.exit(1); }, 60000);

const init = await send("initialize", {
  protocolVersion: "2024-11-05",
  capabilities: {},
  clientInfo: { name: "manual", version: "1.0.0" },
});
console.log("SERVER:", JSON.stringify(init.result?.serverInfo || {}));
notify("notifications/initialized", {});

const tools = await send("tools/list", {});
for (const t of tools.result?.tools || []) {
  console.log("\n### TOOL:", t.name);
  console.log("DESC:", (t.description || "").slice(0, 200));
  console.log("SCHEMA:", JSON.stringify(t.inputSchema?.properties || {}));
}
clearTimeout(timeout);
child.kill();
process.exit(0);
