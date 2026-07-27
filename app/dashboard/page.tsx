"use client"
import { LogoutOutlined } from "@ant-design/icons";
import { useAuthStore } from "@/lib/stores/auth.store";
import { Button } from "antd";



export default function dashboard() {


  const logout = useAuthStore((state) => state.logout);

  const handleLogout = async () => {
    await logout();

    
    // Hard navigation (not router.replace) so the browser re-evaluates
    // middleware against the just-cleared auth-token cookie immediately,
    // rather than racing a soft client-side transition against the
    // cookie clear - the same fix applied to the login page.
    window.location.href = "/login";
  };


  return (
    <div>
<div>Dashboard</div>
<Button
  danger
  ghost
  icon={<LogoutOutlined />}
  onClick={handleLogout}
  size="large"
>
  Logout
</Button>

    </div>
  )
}
