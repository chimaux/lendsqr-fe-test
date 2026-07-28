import Link from "next/link";

export default function NotFound() {
  return (
    <div>
      <h2>User not found</h2>

      <Link href="/dashboard/users">
        Back to Users
      </Link>
    </div>
  );
}