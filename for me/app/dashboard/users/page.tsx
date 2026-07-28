'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import { useVirtualizer } from '@tanstack/react-virtual';
import {
  Button,
  DatePicker,
  Form,
  Input,
  Popover,
  Select,
} from "antd";
import dayjs from "dayjs";
import { useSearchStore } from '@/lib/stores/search.store';
import { useUsersStore } from '@/lib/stores/users.store';
import type { UserStatus } from '@/lib/schemas/users';
import {
  UsersIcon,
  ActiveUsersIcon,
  UsersWithLoansIcon,
  UsersWithSavingsIcon,
  FilterIcon,
  MoreIcon,
  ViewDetailsIcon,
  BlacklistIcon,
  ActivateIcon,
  ChevronLeft,
  ChevronRight,
} from "./components/icons";
import styles from './UsersPage.module.scss';
import { useRouter } from 'next/navigation';









/* ==========================================================
   Status badge
   ========================================================== */
const STATUS_CLASS: Record<UserStatus, string> = {
  Active: styles.statusActive,
  Pending: styles.statusPending,
  Blacklisted: styles.statusBlacklisted,
  Inactive: styles.statusInactive,
};

const StatusBadge = ({ status }: { status: UserStatus }) => (
  <span className={`${styles.statusBadge} ${STATUS_CLASS[status]}`}>{status}</span>
);

/* ==========================================================
   Helpers
   ========================================================== */
const ROWS_PER_PAGE_OPTIONS = [10, 20, 50, 100];

const formatDateJoined = (iso: string) => {
  const d = new Date(iso);
  return (
    d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) +
    ' ' +
    d.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' })
  );
};

interface FilterState {
  organization: string;
  username: string;
  email: string;
  date: string;
  phone: string;
  status: UserStatus | '';
}

const EMPTY_FILTERS: FilterState = {
  organization: '',
  username: '',
  email: '',
  date: '',
  phone: '',
  status: '',
};

/* ==========================================================
   Main component
   ========================================================== */
const UsersPage = () => {
  const router = useRouter();
  const { users, loading, error, fetchUsers, blacklistUser, activateUser } = useUsersStore();
  const searchQuery = useSearchStore((s) => s.query);

  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const [filters, setFilters] = useState<FilterState>(EMPTY_FILTERS);
  const [appliedFilters, setAppliedFilters] = useState<FilterState>(EMPTY_FILTERS);

  // Track which column header has its filter open (null = none)
  const [activeFilterCol, setActiveFilterCol] = useState<string | null>(null);

  const menuRef = useRef<HTMLDivElement>(null);
  const tableScrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  const organizations = useMemo(
    () => Array.from(new Set(users.map((u) => u.organization.organization_name))).sort(),
    [users]
  );

  const filteredUsers = useMemo(() => {
    let result = users;
    const { organization, username, email, phone, date, status } = appliedFilters;

    if (organization) {
      result = result.filter((u) => u.organization.organization_name === organization);
    }
    if (username) {
      const q = username.toLowerCase();
      result = result.filter((u) => u.general_details.profile.user_name.toLowerCase().includes(q));
    }
    if (email) {
      const q = email.toLowerCase();
      result = result.filter((u) => u.general_details.profile.email_address.toLowerCase().includes(q));
    }
    if (phone) {
      result = result.filter((u) => u.general_details.profile.phone_number.includes(phone));
    }
    if (date) {
      result = result.filter((u) => u.general_details.profile.date_joined.startsWith(date));
    }
    if (status) {
      result = result.filter((u) => u.status === status);
    }

    const q = searchQuery.trim().toLowerCase();
    if (q) {
      result = result.filter((u) => {
        const profile = u.general_details.profile;
        return (
          u.organization.organization_name.toLowerCase().includes(q) ||
          profile.user_name.toLowerCase().includes(q) ||
          profile.email_address.toLowerCase().includes(q) ||
          profile.phone_number.includes(q) ||
          u.status.toLowerCase().includes(q)
        );
      });
    }

    return result;
  }, [users, appliedFilters, searchQuery]);

  // Reset back to page 1 whenever the active result set changes shape.
  useEffect(() => {
    setCurrentPage(1);
  }, [appliedFilters, searchQuery, rowsPerPage]);

  const stats = useMemo(
    () => ({
      users: users.length,
      activeUsers: users.filter((u) => u.status === 'Active').length,
      usersWithLoans: users.filter((u) => u.loans.length > 0).length,
      usersWithSavings: users.filter((u) => u.savings.wallet_balance > 0).length,
    }),
    [users]
  );

  const totalPages = Math.max(1, Math.ceil(filteredUsers.length / rowsPerPage));
  const paginatedUsers = filteredUsers.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );

  // Virtualize the rows rendered for the *current page* only. Pagination still
  // controls which slice of `filteredUsers` is in play; this just avoids
  // mounting all (up to rowsPerPage, e.g. 100) rows' DOM at once.
  const rowVirtualizer = useVirtualizer({
    count: paginatedUsers.length,
    getScrollElement: () => tableScrollRef.current,
    estimateSize: () => 57,
    overscan: 8,
    measureElement: (el) => el.getBoundingClientRect().height,
  });

  // Jump back to the top of the scroll area whenever the page (or the
  // underlying result set) changes, so a new page doesn't open mid-scroll.
  useEffect(() => {
    rowVirtualizer.scrollToOffset(0);
  }, [currentPage, rowsPerPage, appliedFilters, searchQuery, rowVirtualizer]);

  const handleFilterChange = (field: keyof FilterState, value: string) => {
    setFilters((prev) => ({ ...prev, [field]: value }));
  };

  const applyFilters = () => {
    setAppliedFilters(filters);
    setActiveFilterCol(null);
  };

  const resetFilters = () => {
    setFilters(EMPTY_FILTERS);
    setAppliedFilters(EMPTY_FILTERS);
    setActiveFilterCol(null);
  };

  const filterContent = (
    <div className={styles.filterPanel}>
      <Form layout="vertical">
        <Form.Item
          label="Organization"
          className={styles.filterField}
        >
          <Select
            getPopupContainer={(trigger) => trigger.parentElement!}
            placeholder="Select"
            value={filters.organization || undefined}
            onChange={(value) =>
              handleFilterChange("organization", value ?? "")
            }
            options={organizations.map((org) => ({
              label: org,
              value: org,
            }))}
          />
        </Form.Item>

        <Form.Item
          label="Username"
          className={styles.filterField}
        >
          <Input
            placeholder="User"
            value={filters.username}
            onChange={(e) =>
              handleFilterChange("username", e.target.value)
            }
          />
        </Form.Item>

        <Form.Item
          label="Email"
          className={styles.filterField}
        >
          <Input
            placeholder="Email"
            value={filters.email}
            onChange={(e) =>
              handleFilterChange("email", e.target.value)
            }
          />
        </Form.Item>

        <Form.Item
          label="Date"
          className={styles.filterField}
        >
          <DatePicker
            getPopupContainer={(trigger) => trigger.parentElement!}
            style={{ width: "100%" }}
            placeholder="Date"
            value={filters.date ? dayjs(filters.date) : null}
            onChange={(date) =>
              handleFilterChange(
                "date",
                date ? date.format("YYYY-MM-DD") : ""
              )
            }
          />
        </Form.Item>

        <Form.Item
          label="Phone Number"
          className={styles.filterField}
        >
          <Input
            placeholder="Phone Number"
            value={filters.phone}
            onChange={(e) =>
              handleFilterChange("phone", e.target.value)
            }
          />
        </Form.Item>

        <Form.Item
          label="Status"
          className={styles.filterField}
        >
          <Select
            getPopupContainer={(trigger) => trigger.parentElement!}
            placeholder="Select"
            value={filters.status || undefined}
            onChange={(value) =>
              handleFilterChange("status", value as UserStatus | "")
            }
            options={[
              { label: "Active", value: "Active" },
              { label: "Pending", value: "Pending" },
              { label: "Blacklisted", value: "Blacklisted" },
              { label: "Inactive", value: "Inactive" },
            ]}
          />
        </Form.Item>

        <div className={styles.filterActions}>
          <Button
            className={styles.resetButton}
            onClick={resetFilters}
          >
            Reset
          </Button>

          <Button
            type="primary"
            className={styles.filterButton}
            onClick={applyFilters}
          >
            Filter
          </Button>
        </div>
      </Form>
    </div>
  );

  const handleMenuAction = (action: 'view' | 'blacklist' | 'activate', userId: string) => {
    if (action === 'blacklist') blacklistUser(userId);
    if (action === 'activate') activateUser(userId);
     if (action === 'view') {
       router.push(`/dashboard/users/${userId}`);
     }
   
    setActiveMenu(null);
  };

  const getPageNumbers = () => {
    const pages: (number | '...')[] = [];
    for (let i = 1; i <= totalPages; i++) {
      if (i === 1 || i === totalPages || (i >= currentPage - 1 && i <= currentPage + 1)) {
        pages.push(i);
      } else if (pages[pages.length - 1] !== '...') {
        pages.push('...');
      }
    }
    return pages;
  };

  if (loading) {
    return (
      <div className={styles.usersPage}>
        <h1 className={styles.pageTitle}>Users</h1>
        <p className={styles.loadingState}>Loading users…</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className={styles.usersPage}>
        <h1 className={styles.pageTitle}>Users</h1>
        <p className={styles.errorState}>{error}</p>
      </div>
    );
  }

  return (
    <div className={styles.usersPage}>
      <h1 className={styles.pageTitle}>Users</h1>

      {/* Stats Cards */}
      <div className={styles.statsGrid}>
        <div className={styles.statCard}>
          <div className={styles.statIcon}><UsersIcon /></div>
          <p className={styles.statLabel}>Users</p>
          <h2 className={styles.statValue}>{stats.users.toLocaleString()}</h2>
        </div>
        <div className={styles.statCard}>
          <div className={styles.statIcon}><ActiveUsersIcon /></div>
          <p className={styles.statLabel}>Active Users</p>
          <h2 className={styles.statValue}>{stats.activeUsers.toLocaleString()}</h2>
        </div>
        <div className={styles.statCard}>
          <div className={styles.statIcon}><UsersWithLoansIcon /></div>
          <p className={styles.statLabel}>Users with Loans</p>
          <h2 className={styles.statValue}>{stats.usersWithLoans.toLocaleString()}</h2>
        </div>
        <div className={styles.statCard}>
          <div className={styles.statIcon}><UsersWithSavingsIcon /></div>
          <p className={styles.statLabel}>Users with Savings</p>
          <h2 className={styles.statValue}>{stats.usersWithSavings.toLocaleString()}</h2>
        </div>
      </div>

      {/* Table Section */}
      <div className={styles.tableContainer}>
        <div className={styles.tableContent}>
          <div className={styles.tableWrapper}>
            <div className={styles.tableGrid} role="table">
              {/* Header row (outside the scroll area, so it stays put while the body virtualizes) */}
              <div className={styles.gridHeaderRow} role="row">
                {[
                  { key: 'organization', label: 'Organization' },
                  { key: 'username', label: 'Username' },
                  { key: 'email', label: 'Email' },
                  { key: 'phone', label: 'Phone Number' },
                  { key: 'date', label: 'Date Joined' },
                  { key: 'status', label: 'Status' },
                ].map((col) => (
                  <div key={col.key} className={styles.tableHeader} role="columnheader">
                    <Popover
                      trigger="click"
                      open={activeFilterCol === col.key}
                      onOpenChange={(open) => setActiveFilterCol(open ? col.key : null)}
                      placement="bottomLeft"
                      content={filterContent}
                      overlayClassName={styles.filterPopover}
                    >
                      <button
                        type="button"
                        className={styles.headerButton}
                      >
                        <span>{col.label}</span>
                        <span className={styles.filterIcon}>
                          <FilterIcon />
                        </span>
                      </button>
                    </Popover>
                  </div>
                ))}
                <div className={styles.tableHeader} role="columnheader" />
              </div>

              {/* Virtualized body: only the rows currently in the viewport (+ overscan)
                  are mounted, no matter how many rows this page holds. */}
              {paginatedUsers.length === 0 ? (
                <div className={styles.emptyState}>No users match your search or filters.</div>
              ) : (
                <div
                  ref={tableScrollRef}
                  className={styles.virtualScrollArea}
                >
                  <div
                    className={styles.virtualInner}
                    style={{ height: rowVirtualizer.getTotalSize() }}
                  >
                    {rowVirtualizer.getVirtualItems().map((virtualRow) => {
                      const user = paginatedUsers[virtualRow.index];
                      const profile = user.general_details.profile;
                      return (
                        <div
                          key={user.id}
                          ref={rowVirtualizer.measureElement}
                          data-index={virtualRow.index}
                          role="row"
                          className={`${styles.gridRow} ${styles.tableRow}`}
                          style={{
                            transform: `translateY(${virtualRow.start}px)`,
                            zIndex: activeMenu === user.id ? 2 : 1,
                          }}
                        >
                          <div className={styles.tableCell} role="cell">{user.organization.organization_name}</div>
                          <div className={styles.tableCell} role="cell">{profile.user_name}</div>
                          <div className={styles.tableCell} role="cell">{profile.email_address}</div>
                          <div className={styles.tableCell} role="cell">{profile.phone_number}</div>
                          <div className={styles.tableCell} role="cell">{formatDateJoined(profile.date_joined)}</div>
                          <div className={styles.tableCell} role="cell">
                            <StatusBadge status={user.status} />
                          </div>
                          <div className={styles.tableCell} role="cell">
                            <div
                              className={styles.actionWrapper}
                              ref={activeMenu === user.id ? menuRef : null}
                            >
                              <button
                                type="button"
                                className={styles.actionButton}
                                aria-label="Row actions"
                                onClick={() => setActiveMenu(activeMenu === user.id ? null : user.id)}
                              >
                                <MoreIcon />
                              </button>
                              {activeMenu === user.id && (
                                <div className={styles.actionMenu}>
                                  <button type="button" onClick={() => handleMenuAction('view', user.id)}>
                                    <ViewDetailsIcon /> View Details
                                  </button>
                                  <button type="button" onClick={() => handleMenuAction('blacklist', user.id)}>
                                    <BlacklistIcon /> Blacklist User
                                  </button>
                                  <button type="button" onClick={() => handleMenuAction('activate', user.id)}>
                                    <ActivateIcon /> Activate User
                                  </button>
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Pagination */}
      <div className={styles.pagination}>
        <div className={styles.rowsPerPage}>
          <span>Showing</span>
          <select
            value={rowsPerPage}
            onChange={(e) => setRowsPerPage(Number(e.target.value))}
          >
            {ROWS_PER_PAGE_OPTIONS.map((n) => (
              <option key={n} value={n}>{n}</option>
            ))}
          </select>
          <span>out of {filteredUsers.length}</span>
        </div>
        <div className={styles.pageControls}>
          <button
            type="button"
            className={styles.pageButton}
            onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
            disabled={currentPage === 1}
          >
            <ChevronLeft />
          </button>
          {getPageNumbers().map((page, idx) =>
            page === '...' ? (
              <span key={`ellipsis-${idx}`} className={styles.ellipsis}>...</span>
            ) : (
              <button
                key={page}
                type="button"
                className={`${styles.pageNumber} ${currentPage === page ? styles.pageNumberActive : ''}`}
                onClick={() => setCurrentPage(page)}
              >
                {page}
              </button>
            )
          )}
          <button
            type="button"
            className={styles.pageButton}
            onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
            disabled={currentPage === totalPages}
          >
            <ChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default UsersPage;