"use client";

import { useEffect, useMemo, useState } from "react";
import { useParams } from "next/navigation";

import styles from "./page.module.scss";

import UserHeader from "./components/UserHeader";
import UserSummary from "./components/UserSummary";
import UserTabs, { USER_TABS, type UserTab } from "./components/UserTabs";
import GeneralDetails from "./components/GeneralDetails";
import Documents from "./components/Documents";
import BankDetails from "./components/BankDetails";
import Loans from "./components/Loans";
import Savings from "./components/Savings";
import AppsSystem from "./components/AppsSystem";

import { useUsersStore } from "@/lib/stores/users.store";
import { useAuthStore } from "@/lib/stores/auth.store";

export default function UserDetailsPage() {
  const params = useParams();

  const { users, loading, error, fetchUsers, blacklistUser, activateUser } =
    useUsersStore();
  const canBlacklist = useAuthStore((s) => s.canBlacklistUser());
  const canActivate = useAuthStore((s) => s.canActivateUser());

  const [activeTab, setActiveTab] = useState<UserTab>(USER_TABS[0]);

  useEffect(() => {
    if (!users.length) {
      fetchUsers();
    }
  }, [users.length, fetchUsers]);

  const user = useMemo(
    () => users.find((u) => u.id === params.id),
    [users, params.id]
  );

  if (loading) {
    return <div className={styles.loading}>Loading user...</div>;
  }

  if (error) {
    return <div className={styles.error}>{error}</div>;
  }

  if (!user) {
    return <div className={styles.error}>User not found.</div>;
  }

  return (
    <div className={styles.page}>
      <UserHeader
        status={user.status}
        onBlacklist={() => blacklistUser(user.id)}
        onActivate={() => activateUser(user.id)}
        canBlacklist={canBlacklist}
        canActivate={canActivate}
      />

      <UserSummary user={user} />

      <UserTabs activeTab={activeTab} onChange={setActiveTab} />

      {activeTab === "General Details" && <GeneralDetails user={user} />}
      {activeTab === "Documents" && <Documents />}
      {activeTab === "Bank Details" && <BankDetails />}
      {activeTab === "Loans" && <Loans />}
      {activeTab === "Savings" && <Savings />}
      {activeTab === "App and System" && <AppsSystem />}
    </div>
  );
}
