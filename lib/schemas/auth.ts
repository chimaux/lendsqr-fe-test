// lib/schemas/auth.ts

import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().email("Invalid email"),
  password: z.string().min(1, "Password is required"),
});

export type LoginForm = z.infer<typeof loginSchema>;

export const permissionsSchema = z.object({
  dashboard: z.boolean(),
  users: z.boolean(),
  can_activate_user: z.boolean(),
  can_blacklist_user: z.boolean(),
});

export const adminUserSchema = z.object({
  id: z.string(),
  email: z.string().email(),
  first_name: z.string(),
  last_name: z.string(),
  role: z.enum(["viewer", "administrator"]),
  account_status: z.enum(["Active", "Inactive"]),
  permissions: permissionsSchema,
});

export type AdminUser = z.infer<typeof adminUserSchema>;