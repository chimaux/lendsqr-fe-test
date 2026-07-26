import React from 'react';
import SideNav from '@/app/components/dashboard/SideNav';
import styles from './dashboard.module.scss';
import TopBar from '@/app/components/dashboard/TopBar';
import { MobileNavProvider } from '@/app/components/dashboard/MobileNavContext';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <MobileNavProvider>
      <div className={styles.layout}>
        <TopBar />
        <SideNav />
        <main className={styles.main}>{children}</main>
      </div>
    </MobileNavProvider>
  );
}
