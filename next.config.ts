import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */

  // Ant Design (and several of its internal rc-* dependencies), its icon
  // package, and Zustand ship pre-built JS that Next.js does NOT transpile
  // by default (only your own app code gets compiled to your target
  // browsers). On very old WebKit engines - e.g. Safari on an iPhone 7,
  // capped at iOS 15 - a single unsupported syntax feature in one of
  // these packages throws a SyntaxError at parse time, which kills the
  // entire script: no event handlers attach anywhere on the page. That
  // matches "everything breaks at once" (validation, toggle, submit)
  // while modern/auto-updating browsers (Chrome, recent Safari) are fine.
  //
  // Listing them here makes Next's compiler transpile them too, instead
  // of shipping their code untouched.
  transpilePackages: [
    "antd",
    "@ant-design/icons",
    "@ant-design/icons-svg",
    "@ant-design/cssinjs",
    "@ant-design/nextjs-registry",
    "rc-util",
    "rc-pagination",
    "rc-picker",
    "rc-input",
    "rc-field-form",
    "zustand",
  ],
};

export default nextConfig;
