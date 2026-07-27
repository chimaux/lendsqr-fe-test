import { create } from "zustand";

import { usersSchema } from "@/lib/schemas/users";
import type { User, UserStatus } from "@/lib/schemas/users";

// We only persist *changes* to localStorage (an id -> status map), not the
// full 500-user dataset. The dataset itself is re-fetched from /api/users
// each session and the saved overrides are re-applied on top of it. This
// keeps localStorage usage tiny and survives the seed data changing shape.
const OVERRIDES_KEY = "lendsqr_user_status_overrides";

type StatusOverrides = Record<string, UserStatus>;

function readOverrides(): StatusOverrides {
  if (typeof window === "undefined") return {};

  try {
    const raw = window.localStorage.getItem(OVERRIDES_KEY);
    return raw ? (JSON.parse(raw) as StatusOverrides) : {};
  } catch {
    return {};
  }
}

function writeOverrides(overrides: StatusOverrides) {
  if (typeof window === "undefined") return;

  try {
    window.localStorage.setItem(OVERRIDES_KEY, JSON.stringify(overrides));
  } catch {
    // Storage unavailable (private browsing, quota exceeded, etc). Non-fatal:
    // the change still applies for the current session via in-memory state.
  }
}

function applyOverrides(users: User[], overrides: StatusOverrides): User[] {
  const ids = Object.keys(overrides);
  if (ids.length === 0) return users;

  return users.map((user) =>
    overrides[user.id] ? { ...user, status: overrides[user.id] } : user
  );
}

interface UsersState {
  users: User[];
  loading: boolean;
  error: string | null;

  fetchUsers: () => Promise<void>;
  setStatus: (id: string, status: UserStatus) => void;
  blacklistUser: (id: string) => void;
  activateUser: (id: string) => void;
}

export const useUsersStore = create<UsersState>((set, get) => ({
  users: [],
  loading: false,
  error: null,

  fetchUsers: async () => {
    set({ loading: true, error: null });

    try {
      const response = await fetch("/api/users");

      if (!response.ok) {
        throw new Error("Request failed");
      }

      const json = await response.json();
      const parsed = usersSchema.safeParse(json);
      const users = parsed.success ? parsed.data : (json as User[]);

      set({
        users: applyOverrides(users, readOverrides()),
        loading: false,
      });
    } catch {
      set({
        loading: false,
        error: "Couldn't load users. Please refresh and try again.",
      });
    }
  },

  setStatus: (id, status) => {
    const overrides = readOverrides();
    overrides[id] = status;
    writeOverrides(overrides);

    set({
      users: get().users.map((user) =>
        user.id === id ? { ...user, status } : user
      ),
    });
  },

  blacklistUser: (id) => get().setStatus(id, "Blacklisted"),
  activateUser: (id) => get().setStatus(id, "Active"),
}));
