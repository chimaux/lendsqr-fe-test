import { create } from "zustand";
import { persist } from "zustand/middleware";

import { login as loginApi } from "@/lib/api/auth";
import { logout as logoutApi } from "@/lib/api/auth";
import type { LoginForm, AdminUser } from "@/lib/schemas/auth";

interface AuthState {
  user: AdminUser | null;
  token: string | null;
  loading: boolean;
  error: string | null;

  login: (credentials: LoginForm) => Promise<boolean>;
  logout: () => Promise<void>;

  // Permission helpers — derive straight from the logged-in admin's
  // `permissions` object so every screen checks the same source of truth.
  canActivateUser: () => boolean;
  canBlacklistUser: () => boolean;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set, get) => ({
  user: null,
  token: null,
  loading: false,
  error: null,

  canActivateUser: () => get().user?.permissions.can_activate_user ?? false,
  canBlacklistUser: () => get().user?.permissions.can_blacklist_user ?? false,

  login: async (credentials) => {
    set({
      loading: true,
      error: null,
    });

    try {
      const result = await loginApi(credentials);

      if (!result.success) {
        set({
          loading: false,
          error: result.message,
        });

        return false;
      }

      set({
        loading: false,
        user: result.user,
        token: result.token,
      });

      return true;
    } catch {
      set({
        loading: false,
        error: "Something went wrong.",
      });

      return false;
    }
  },

 logout: async () => {
  await logoutApi();

  set({
    user: null,
    token: null,
    error: null,
  });
},
    }),
    {
      name: "lendsqr_auth", // localStorage key
      // Only persist what's needed to rehydrate the logged-in admin's
      // identity + permissions after a hard navigation/full reload.
      // `loading`/`error` are transient UI state and shouldn't survive reloads.
      partialize: (state) => ({ user: state.user, token: state.token }),
    }
  )
);