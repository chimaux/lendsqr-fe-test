import {
  DashboardIcon,
  UsersIcon,
  GuarantorsIcon,
  LoansIcon,
  DecisionModelsIcon,
  SavingsIcon,
  LoanRequestsIcon,
  WhitelistIcon,
  KarmaIcon,
  OrganizationIcon,
  LoanProductsIcon,
  SavingsProductsIcon,
  FeesAndChargesIcon,
  TransactionsIcon,
  ServicesIcon,
  ServiceAccountIcon,
  SettlementsIcon,
  ReportsIcon,
  PreferencesIcon,
  FeesAndPricingIcon,
  AuditLogsIcon,
  BriefcaseIcon,
} from '../icons';

export interface NavItem {
  label: string;
  href: string;
  icon: React.ComponentType<{ active?: boolean; className?: string }>;
}

export interface NavSection {
  title?: string;
  items: NavItem[];
}

export const navSections: NavSection[] = [
  {
    items: [
      {
        label: 'Dashboard',
        href: '/dashboard',
        icon: DashboardIcon,
      },
    ],
  },
  {
    title: 'CUSTOMERS',
    items: [
      {
        label: 'Users',
        href: '/dashboard/users',
        icon: UsersIcon,
      },
      {
        label: 'Guarantors',
        href: '/dashboard/guarantors',
        icon: GuarantorsIcon,
      },
      {
        label: 'Loans',
        href: '/dashboard/loans',
        icon: LoansIcon,
      },
      {
        label: 'Decision Models',
        href: '/dashboard/decision-models',
        icon: DecisionModelsIcon,
      },
      {
        label: 'Savings',
        href: '/dashboard/savings',
        icon: SavingsIcon,
      },
      {
        label: 'Loan Requests',
        href: '/dashboard/loan-requests',
        icon: LoanRequestsIcon,
      },
      {
        label: 'Whitelist',
        href: '/dashboard/whitelist',
        icon: WhitelistIcon,
      },
      {
        label: 'Karma',
        href: '/dashboard/karma',
        icon: KarmaIcon,
      },
    ],
  },
  {
    title: 'BUSINESSES',
    items: [
      {
        label: 'Organization',
        href: '/dashboard/organization',
        icon: OrganizationIcon,
      },
      {
        label: 'Loan Products',
        href: '/dashboard/loan-products',
        icon: LoanProductsIcon,
      },
      {
        label: 'Savings Products',
        href: '/dashboard/savings-products',
        icon: SavingsProductsIcon,
      },
      {
        label: 'Fees and Charges',
        href: '/dashboard/fees-and-charges',
        icon: FeesAndChargesIcon,
      },
    ],
  },
  {
    items: [
      {
        label: 'Transactions',
        href: '/dashboard/transactions',
        icon: TransactionsIcon,
      },
      {
        label: 'Services',
        href: '/dashboard/services',
        icon: ServicesIcon,
      },
      {
        label: 'Service Account',
        href: '/dashboard/service-account',
        icon: ServiceAccountIcon,
      },
      {
        label: 'Settlements',
        href: '/dashboard/settlements',
        icon: SettlementsIcon,
      },
      {
        label: 'Reports',
        href: '/dashboard/reports',
        icon: ReportsIcon,
      },
    ],
  },
  {
    title: 'SETTINGS',
    items: [
      {
        label: 'Preferences',
        href: '/dashboard/preferences',
        icon: PreferencesIcon,
      },
      {
        label: 'Fees and Pricing',
        href: '/dashboard/fees-and-pricing',
        icon: FeesAndPricingIcon,
      },
      {
        label: 'Audit Logs',
        href: '/dashboard/audit-logs',
        icon: AuditLogsIcon,
      },
      {
  label: "System Messages",
  href: "/dashboard/system-messages",
  icon: PreferencesIcon,
},
    ],
  },
];
