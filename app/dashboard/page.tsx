"use client"
import { LogoutOutlined } from "@ant-design/icons";
import { useAuthStore } from "@/lib/stores/auth.store";
import { Button } from "antd";
import { useRouter } from "next/navigation";


export default function dashboard() {

const router = useRouter();
  const logout = useAuthStore((state) => state.logout);

  const handleLogout = async () => {
    await logout();

    router.replace("/login");
  };


  return (
    <div>
Dashboard
  <Button
  type="default"
  onClick={handleLogout}
  icon={<LogoutOutlined />}
  danger
>
  Logout
</Button>

    </div>
  )
}
