'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { navSections } from './navItems';
import { BriefcaseIcon, ChevronDownIcon, SignOutIcon } from '../icons';
import { useMobileNav } from '../MobileNavContext';
import styles from './SideNav.module.scss';
import { useAuthStore } from '@/lib/stores/auth.store';

const SideNav: React.FC = () => {
  const pathname = usePathname();
  const { isOpen, close } = useMobileNav();


  // Log out function
const logout = useAuthStore((state) => state.logout);

const handleLogout = async () => {
  await logout();
  window.location.href = "/login";
};



  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const isActive = (href: string): boolean => {
    if (href === '/dashboard') {
      return pathname === '/dashboard';
    }
    return pathname.startsWith(href);
  };

  return (
    <>
      {isOpen && (
        <div
          className={styles.overlay}
          onClick={close}
          role="presentation"
          aria-hidden="true"
        />
      )}
      <aside className={`${styles.sidebar} ${isOpen ? styles.open : ''}`}>
        {/* Organization Switcher */}
        <div className={styles.orgSwitcher}>
          <BriefcaseIcon className={styles.orgIcon} />
          <span className={styles.orgLabel}>Switch Organization</span>
          <ChevronDownIcon className={styles.orgChevron} />
        </div>

        {/* Navigation */}
        <nav className={styles.nav}>
          {navSections.map((section, sectionIndex) => (
            <div key={sectionIndex} className={styles.section}>
              {section.title && (
                <h3 className={styles.sectionTitle}>{section.title}</h3>
              )}
              <ul className={styles.navList}>
                {section.items.map((item) => {
                  const active = isActive(item.href);
                  const Icon = item.icon;

                  return (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className={`${styles.navLink} ${active ? styles.active : ''}`}
                        aria-current={active ? 'page' : undefined}
                        onClick={close}
                      >
                        <Icon active={active} className={styles.navIcon} />
                        <span className={styles.navLabel}>{item.label}</span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </nav>
<div className={styles.sidebarFooter}>
  <button
    className={styles.logoutButton}
    onClick={handleLogout}
  >
    <SignOutIcon className={styles.logoutIcon} />

    <span>Logout</span>
  </button>

  <span className={styles.version}>
    v1.2.0
  </span>
</div>

      </aside>
    </>
  );
};

export default SideNav;
