import Link from "next/link";
import { Button, Result } from "antd";

export default function NotFound() {
  return (
    <Result
      status="404"
      title="404"
      subTitle="Sorry, the page you are looking for does not exist."
      extra={
        <Link href="/">
          <Button type="primary">Go Back To Home Page</Button>
        </Link>
      }
    />
  );
}