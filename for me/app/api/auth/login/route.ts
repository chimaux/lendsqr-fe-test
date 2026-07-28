// app/api/auth/login/route.ts

import adminUsers from "@/data/admin-users.json";
import { loginSchema } from "@/lib/schemas/auth";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const parsed = loginSchema.safeParse(body);

    if (!parsed.success) {
      return Response.json(
        {
          success: false,
          message: "Invalid request.",
        },
        {
          status: 400,
        }
      );
    }

    const { email, password } = parsed.data;

    const admin = adminUsers.find(
      (user) =>
        user.email.toLowerCase() === email.toLowerCase() &&
        user.password === password
    );

    if (!admin) {
      return Response.json(
        {
          success: false,
          message: "Invalid email or password.",
        },
        {
          status: 401,
        }
      );
    }

    const { password: _, ...user } = admin;

const response = NextResponse.json({
  success: true,
  user,
});

response.cookies.set("auth-token", crypto.randomUUID(), {
  httpOnly: true,
  secure: process.env.NODE_ENV === "production",
  sameSite: "lax",
  path: "/",
  maxAge: 60 * 60 * 24, 
});

return response;

  } catch {
    return Response.json(
      {
        success: false,
        message: "Something went wrong.",
      },
      {
        status: 500,
      }
    );
  }
}