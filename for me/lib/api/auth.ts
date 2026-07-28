// lib/api/auth.ts

import type { LoginForm } from "@/lib/schemas/auth";


export async function login(credentials: LoginForm) {
  const response = await fetch("/api/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  });

  const result = await response.json();

  console.log(result);

  return result;
}


export async function logout() {
  const response = await fetch("/api/auth/logout", {
    method: "POST",
  });

  return response.json();
}