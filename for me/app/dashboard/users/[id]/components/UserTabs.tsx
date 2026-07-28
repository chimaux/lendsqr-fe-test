"use client";

import styles from "../page.module.scss";

export const USER_TABS = [
  "General Details",
  "Documents",
  "Bank Details",
  "Loans",
  "Savings",
  "App and System",
] as const;

export type UserTab = (typeof USER_TABS)[number];

type Props = {
  activeTab: UserTab;
  onChange: (tab: UserTab) => void;
};

export default function UserTabs({ activeTab, onChange }: Props) {
  return (
    <nav className={styles.tabs} aria-label="User detail sections">
      {USER_TABS.map((tab) => (
        <button
          key={tab}
          type="button"
          className={
            tab === activeTab
              ? `${styles.tab} ${styles.activeTab}`
              : styles.tab
          }
          aria-current={tab === activeTab ? "page" : undefined}
          onClick={() => onChange(tab)}
        >
          {tab}
        </button>
      ))}
    </nav>
  );
}
