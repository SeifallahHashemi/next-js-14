"use client";
import React from "react";
import { ConfigProvider, theme } from "antd";
import { StyleProvider } from "@ant-design/cssinjs";
import TanStackQueryProviders from "@/utils/providers";

const Providers = ({ children }: React.PropsWithChildren) => {
  return (
    <ConfigProvider theme={{}}>
      <StyleProvider hashPriority="high">
        <TanStackQueryProviders>
          {children}
        </TanStackQueryProviders>
      </StyleProvider>
    </ConfigProvider>
  );
};

export default Providers;
