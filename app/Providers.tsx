"use client";

import { ConfigProvider } from "antd";
import { AntdRegistry } from "@ant-design/nextjs-registry";

import { antdTheme } from "@/theme/antd-theme";

export default function Providers({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AntdRegistry>
      <ConfigProvider theme={antdTheme}>
        {children}
      </ConfigProvider>
    </AntdRegistry>
  );
}