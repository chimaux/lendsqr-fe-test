'use client';

import React from 'react';
import Link from 'next/link';
import { BellIcon, ChevronDownIcon, HamburgerIcon } from '../icons';
import { useMobileNav } from '../MobileNavContext';
import styles from './TopBar.module.scss';
import Image from 'next/image';
import { SearchOutlined } from '@ant-design/icons';
import { useSearchStore } from '@/lib/stores/search.store';

const TopBar: React.FC = () => {
  const searchValue = useSearchStore((s) => s.query);
  const setSearchValue = useSearchStore((s) => s.setQuery);
  const { toggle } = useMobileNav();

  return (
    <header className={styles.topbar}>
      <div className={styles.container}>
        {/* Mobile nav toggle */}
        <button
          type="button"
          className={styles.menuBtn}
          onClick={toggle}
          aria-label="Toggle navigation menu"
        >
          <HamburgerIcon className={styles.menuIcon} />
        </button>

        {/* Logo */}
        <Link href="/dashboard/user" className={styles.logo}>
                      <Image 
                           src="/images/logos/lendsqr-logo.svg"
                                  alt="Lendsqr"
                                  width={138}
                                  height={36}
                                  priority
                          />
        </Link>

        {/* Search */}
        <div className={styles.searchWrapper}>
          <div className={styles.searchBox}>
            <input
              type="text"
              placeholder="Search for anything"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              className={styles.searchInput}
              aria-label="Search for anything"
            />
            <button className={styles.searchButton} aria-label="Search">
              <SearchOutlined
              style={{
    color: "#fff",
    fontSize: 18,
  }}
              />
            </button>
          </div>
        </div>

        {/* Right Actions */}
        <div className={styles.actions}>
          <Link href="/docs" className={styles.docsLink}>
            Docs
          </Link>

          <button className={styles.notificationBtn} aria-label="Notifications">
            <BellIcon className={styles.bellIcon} />
          </button>

          <div className={styles.profile}>
            <div className={styles.avatar}>
              <img
                src="https://i.pravatar.cc/150?img=12"
                alt="Adedeji profile"
                width={40}
                height={40}
              />
            </div>
            <span className={styles.profileName}>Adedeji</span>
            <ChevronDownIcon className={styles.profileChevron} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default TopBar;