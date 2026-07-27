"use client";

import styles from "../page.module.scss";
import { PersonIcon } from "../../components/icons";

import type { User } from "@/lib/schemas/users";

type Props = {
  user: User;
};

export default function UserSummary({ user }: Props) {
  const { profile } = user.general_details;
  const bank = user.bank_details;

  return (
    <section className={styles.summaryCard}>
      <div className={styles.userInfo}>
        {profile.avatar ? (
          <img
            src={profile.avatar}
            alt={profile.full_name}
            className={styles.avatar}
          />
        ) : (
          <div className={styles.avatar} aria-hidden="true">
            <PersonIcon />
          </div>
        )}

        <div>
          <h2>{profile.full_name}</h2>
          <p>{profile.user_name}</p>
        </div>
      </div>

      <div className={styles.divider} />

      <div className={styles.tier}>
        <p>User&apos;s Tier</p>

        <div className={styles.stars}>
          {Array.from({ length: 3 }).map((_, index) => (
            <span
              key={index}
              className={
                index < profile.user_tier ? styles.starActive : styles.star
              }
            >
              ★
            </span>
          ))}
        </div>
      </div>

      <div className={styles.divider} />

      <div className={styles.balance}>
        <h2>
          {new Intl.NumberFormat("en-NG", {
            style: "currency",
            currency: bank.currency,
          }).format(bank.balance)}
        </h2>

        <p>
          {bank.account_number}/{bank.bank_name}
        </p>
      </div>
    </section>
  );
}
