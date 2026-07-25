import Link from "next/link";
import { Button } from "antd";

import styles from "./Home_page.module.scss";

export default function Home_content() {
  return (
    <section className={styles.hero} aria-labelledby="welcome-heading">
      <article className={styles.card}>
        <h1 id="welcome-heading" className={styles.heading}>
          Welcome Back
        </h1>

        <p className={styles.subtext}>
          Sign in to access your dashboard and manage your account securely.
        </p>

        <div className={styles.actions}>
          <Link href="/login">
            <Button
              type="primary"
              size="large"
              className={styles.loginButton}
              block
            >
              Log In
            </Button>
          </Link>
        </div>
      </article>
    </section>
  );
}