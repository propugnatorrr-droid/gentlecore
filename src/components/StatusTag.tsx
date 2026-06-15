import type { Status } from "@/data/products";
import styles from "./StatusTag.module.css";

const tone: Record<Status, string> = {
  Available: styles.available,
  Reserved: styles.reserved,
  "Previously Presented": styles.archived,
  Acquired: styles.archived,
};

export default function StatusTag({ status }: { status: Status }) {
  return <span className={`${styles.tag} ${tone[status]}`}>{status}</span>;
}
