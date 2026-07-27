import styles from "../page.module.scss";

type DetailItemProps = {
  label: string;
  value?: React.ReactNode;
};

export default function DetailItem({
  label,
  value,
}: DetailItemProps) {
  return (
    <div className={styles.infoItem}>
      <span className={styles.label}>{label}</span>

      <span className={styles.value}>
        {value ?? "—"}
      </span>
    </div>
  );
}