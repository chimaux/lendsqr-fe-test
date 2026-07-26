import { create } from "zustand";

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
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  token: null,
  loading: false,
  error: null,

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
}));