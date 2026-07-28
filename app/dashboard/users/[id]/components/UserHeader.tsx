"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";

import styles from "../page.module.scss";

import type { UserStatus } from "@/lib/schemas/users";

type Props = {
  status: UserStatus;
  onBlacklist: () => void;
  onActivate: () => void;
  canBlacklist: boolean;
  canActivate: boolean;
};

export default function UserHeader({
  status,
  onBlacklist,
  onActivate,
  canBlacklist,
  canActivate,
}: Props) {
  const router = useRouter();

  const [statusMessage, setStatusMessage] = useState<string | null>(null);
  const messageTimeout = useRef<ReturnType<typeof setTimeout>>(undefined);

  const isBlacklisted = status === "Blacklisted";
  const isActive = status === "Active";

  const flashMessage = (message: string) => {
    clearTimeout(messageTimeout.current);
    setStatusMessage(message);
    messageTimeout.current = setTimeout(() => setStatusMessage(null), 3000);
  };

  useEffect(() => () => clearTimeout(messageTimeout.current), []);

  const handleBlacklist = () => {
    if (isBlacklisted || !canBlacklist) return;
    onBlacklist();
    flashMessage("User blacklisted.");
  };

  const handleActivate = () => {
    if (isActive || !canActivate) return;
    onActivate();
    flashMessage("User activated.");
  };

  return (
    <>
      <button
        type="button"
        className={styles.backButton}
        onClick={() => router.back()}
      >
        ← Back to Users
      </button>

      <div className={styles.header}>
        <h1>User Details</h1>

        <div className={styles.headerActions}>
          {statusMessage && (
            <span className={styles.statusMessage} role="status">
              {statusMessage}
            </span>
          )}

          <button
            type="button"
            className={styles.blacklistButton}
            disabled={isBlacklisted || !canBlacklist}
            title={
              !canBlacklist
                ? "You don't have permission to blacklist users"
                : isBlacklisted
                ? "User is already blacklisted"
                : undefined
            }
            onClick={handleBlacklist}
          >
            Blacklist User
          </button>

          <button
            type="button"
            className={styles.activateButton}
            disabled={isActive || !canActivate}
            title={
              !canActivate
                ? "You don't have permission to activate users"
                : isActive
                ? "User is already active"
                : undefined
            }
            onClick={handleActivate}
          >
            Activate User
          </button>
        </div>
      </div>
    </>
  );
}
