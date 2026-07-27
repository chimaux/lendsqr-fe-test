// app/api/users/route.ts

import usersData from "@/data/users.json";
import { usersSchema } from "@/lib/schemas/users";
import { NextResponse } from "next/server";

export async function GET() {
  const parsed = usersSchema.safeParse(usersData);

  if (!parsed.success) {
    console.error(parsed.error);

    return NextResponse.json(
      {
        error: "User data failed validation.",
      },
      {
        status: 500,
      }
    );
  }

  return NextResponse.json(parsed.data);
}
