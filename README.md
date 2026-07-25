# Lendsqr Frontend Assessment

A modern, responsive dashboard application built with Next.js 15, TypeScript, and Ant Design. This project demonstrates clean architecture, component reusability, and production-ready patterns for a fintech lending platform.

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript |
| Styling | SCSS Modules + Ant Design |
| UI Library | Ant Design 5 |
| State Management | React Hooks |
| Validation | Zod |
| Fonts | Avenir Next (local), Work Sans (Google Fonts) |

## Project Structure

```
app/
├── page.tsx                    # Landing page
├── layout.tsx                  # Root layout (fonts, theme provider)
├── globals.css                 # Global styles
├── login/
│   └── page.tsx                # Authentication page
└── dashboard/
    ├── layout.tsx              # Dashboard shell (sidebar + header)
    ├── page.tsx                # Users table view
    └── users/
        └── [id]/
            └── page.tsx        # User detail profile

components/
├── layout/
│   └── PublicLayout.tsx        # Reusable public page wrapper
├── pages/
│   └── HomeContent.tsx         # Landing page content
└── ui/                         # Shared UI primitives (future)

lib/
├── theme/
│   ├── antd-theme.ts           # Ant Design theme configuration
│   ├── colors.ts               # Design tokens — colors
│   ├── typography.ts           # Design tokens — fonts
│   ├── spacing.ts              # Design tokens — spacing
│   ├── radius.ts               # Design tokens — border radius
│   ├── shadows.ts              # Design tokens — shadows
│   ├── breakpoints.ts          # Design tokens — breakpoints
│   └── index.ts                # Barrel export
└── validations/
    └── schemas.ts              # Zod validation schemas

public/
├── fonts/
│   └── avenir-next/            # Self-hosted Avenir Next font files
└── images/
    ├── logos/
    └── illustrations/

styles/
├── _mixins.scss                # Shared SCSS mixins (breakpoints)
└── _variables.scss             # Shared SCSS variables
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

### 3. SCSS Modules for Component-Scoped Styles

Each component/page has its own `.module.scss` file. The shared `respond-to` mixin provides consistent breakpoints across all modules without repetition.

### 4. Ant Design Theme Configuration

Ant Design is customized via `ConfigProvider` in the root layout using the design tokens. No inline `!important` overrides or `:global` hacks — all component styling flows through the theme system.

### 5. Zod for Runtime Validation

Form inputs and API responses are validated with Zod schemas, providing:
- Runtime type safety (catches bad data from APIs)
- Automatic TypeScript inference (no manual types needed)
- Clear, user-friendly error messages

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## Features Implemented

| Feature | Status |
|---------|--------|
| Responsive login page | ✅ |
| Form validation with Zod | ✅ |
| Dashboard with sidebar layout | ✅ |
| Users table with filtering | ✅ |
| User detail profile page | ✅ |
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
