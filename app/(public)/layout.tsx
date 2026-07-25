import styles from "./Public_pages_layout.module.scss";

export default function Public_pages_layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={styles.publicLayout}>
      <header className={styles.header}>
        <nav aria-label="Main navigation">
          <div className={styles.brand}>
            <span>Lendsqr</span>
          </div>
        </nav>
      </header>
      <main className={styles.main}>{children}</main>
      <footer className={styles.footer}>
        <p>© 2026 Lendsqr. All rights reserved.</p>
      </footer>
    </div>
  );
}