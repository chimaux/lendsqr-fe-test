# Lendsqr Frontend Assessment

A modern, responsive dashboard application built with Next.js, TypeScript, and Ant Design. This project demonstrates clean architecture, component reusability, and production-ready patterns for a fintech lending platform.

## 🚀 Live Demo

**App URL:** [https://ugorji-chimaeze-promise-lendsqr-fe.vercel.app/](https://ugorji-chimaeze-promise-lendsqr-fe.vercel.app/)

### Test Login Credentials

Use either of the accounts below on the login page. Both accounts can view the dashboard and users table — permissions differ for actions like activating or blacklisting a user.

| Role          | Email                 | Password       | Can activate user | Can blacklist user |
|------         |-------                |----------      |:---:              |:---:               |
| Viewer        | `viewer@lendsqr.com`  | `Password123`  | ❌                | ❌                |
| Administrator | `admin@lendsqr.com`   | `Password123`  | ✅                | ✅                |

> Sign in with the **administrator** account if you want to test the full range of user-management actions; sign in with the **viewer** account to see the app in a read-only capacity.

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js (App Router) |
| Language | TypeScript |
| Styling | SCSS Modules + Ant Design |
| UI Library | Ant Design |
| State Management | Zustand + React Hooks |
| Validation | Zod |
| List Virtualization | TanStack Virtual |
| Mock Data | Faker.js |
| Fonts | Avenir Next (local), Work Sans (Google Fonts) |

## Getting Started

### Prerequisites

- Node.js 18.18 or later
- npm (or your preferred package manager)

### Installation

```bash
# Clone the repository
git clone https://github.com/<your-username>/lendsqr-fe.git
cd lendsqr-fe

# Install dependencies
npm install
```

### Running Locally

```bash
# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Lint the codebase
npm run lint

# Regenerate the mock users dataset
npm run generate:users
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

### Logging In Locally

The same test credentials from the [Live Demo](#-live-demo) section above work in your local environment, since authentication is validated against the seeded `data/admin-users.json` file rather than a live backend.

## Project Structure

```
app/
├── page.tsx                       # Landing page
├── layout.tsx                     # Root layout (fonts, theme provider)
├── globals.css                    # Global styles
├── middleware.ts                  # Route protection (auth-token cookie)
├── (public)/
│   ├── layout.tsx                 # Public page wrapper
│   └── page.tsx                   # Landing page content
├── (auth)/
│   └── login/
│       └── page.tsx               # Login page
├── api/
│   ├── auth/
│   │   ├── login/route.ts         # Validates credentials, sets auth cookie
│   │   └── logout/route.ts        # Clears auth cookie
│   └── users/route.ts             # Serves the mock users dataset
├── components/
│   ├── dashboard/
│   │   ├── SideNav/                # Sidebar navigation
│   │   ├── TopBar/                 # Header bar (search, notifications, profile)
│   │   ├── icons/                  # Custom SVG icon components
│   │   └── MobileNavContext.tsx    # Mobile nav state (context)
│   └── debug/
│       └── ErrorOverlay.tsx        # Dev error overlay
└── dashboard/
    ├── layout.tsx                  # Dashboard shell (sidebar + header)
    ├── page.tsx                    # Dashboard overview / stats
    └── users/
        ├── page.tsx                 # Users table view (filter, paginate)
        ├── components/              # Users-page-specific components
        └── [id]/
            └── page.tsx             # User detail profile
    (plus placeholder routes for the remaining Lendsqr sidebar items:
     organizations, loans, loan-products, loan-requests, decision-models,
     savings, savings-products, fees-and-charges, fees-and-pricing,
     transactions, services, service-account, settlements, reports,
     preferences, audit-logs, karma, guarantors, whitelist)

data/
├── admin-users.json                # Seeded admin/viewer login accounts
└── users.json                      # Seeded mock users table dataset

lib/
├── api/                            # API client helpers
├── schemas/                        # Zod validation schemas
├── stores/                         # Zustand stores
└── theme/
    ├── antd-theme.ts                # Ant Design theme configuration
    ├── colors.ts                    # Design tokens — colors
    ├── typography.ts                # Design tokens — fonts
    ├── spacing.ts                   # Design tokens — spacing
    ├── radius.ts                    # Design tokens — border radius
    ├── shadows.ts                   # Design tokens — shadows
    ├── breakpoints.ts               # Design tokens — breakpoints
    └── index.ts                     # Barrel export

scripts/
└── generate-users.ts               # Generates the mock users dataset with Faker

public/
├── fonts/
│   └── avenir-next/                 # Self-hosted Avenir Next font files
└── images/
    ├── logos/
    └── illustrations/

styles/
├── _mixins.scss                     # Shared SCSS mixins (breakpoints)
└── _variables.scss                  # Shared SCSS variables
```

## Key Design Decisions

### 1. Design Tokens as Single Source of Truth

All visual values (colors, spacing, typography) are centralized in `lib/theme/` as TypeScript constants. This ensures:
- Consistency across components
- Type safety with autocompletion
- Easy theming and future dark mode support

### 2. Route Groups for Layout Isolation

The App Router uses route groups to isolate layouts:
- `(public)` — Landing page with header/footer
- `(auth)` — Login page, standalone without shared layout
- `dashboard/` — Full dashboard shell with sidebar navigation

### 3. Middleware-Based Route Protection

`middleware.ts` guards `/dashboard/users` behind an `auth-token` cookie set on successful login, and redirects already-authenticated users away from `/login`.

### 4. Mock Backend via Route Handlers

Rather than depending on an external API, login and the users table are backed by Next.js Route Handlers (`app/api/**`) reading from seeded JSON in `data/`. `scripts/generate-users.ts` (via Faker.js) regenerates `data/users.json` on demand, so the dataset is reproducible and easy to scale up or down.

### 5. SCSS Modules for Component-Scoped Styles

Each component/page has its own `.module.scss` file. The shared `respond-to` mixin provides consistent breakpoints across all modules without repetition.

### 6. Ant Design Theme Configuration

Ant Design is customized via `ConfigProvider` in the root layout using the design tokens. No inline `!important` overrides or `:global` hacks — all component styling flows through the theme system.

### 7. Zod for Runtime Validation

Form inputs and API responses are validated with Zod schemas, providing:
- Runtime type safety (catches bad data from APIs)
- Automatic TypeScript inference (no manual types needed)
- Clear, user-friendly error messages

### 8. Virtualized Users Table

The users table uses TanStack Virtual to render large datasets smoothly, keeping the DOM light regardless of how many rows are seeded.

## Features Implemented

| Feature | Status |
|---------|--------|
| Responsive login page | ✅ |
| Form validation with Zod | ✅ |
| Cookie-based auth with route protection | ✅ |
| Dashboard with sidebar layout | ✅ |
| Users table with filtering & virtualization | ✅ |
| User detail profile page | ✅ |
| Role-based permissions (viewer vs. administrator) | ✅ |
| Mobile-responsive design | ✅ |
| Design token system | ✅ |

## Future Improvements

- [ ] Unit tests with Vitest + React Testing Library
- [ ] E2E tests with Playwright
- [ ] React Query for server state management
- [ ] Dark mode toggle
- [ ] Accessibility audit (WCAG 2.1 AA)

---

Built for the Lendsqr Frontend Engineering Assessment.
