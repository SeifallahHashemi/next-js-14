'use client';
import React from 'react';
import { ConfigProvider, theme } from 'antd';
import { StyleProvider } from '@ant-design/cssinjs';
import TanStackQueryProviders from '@/utils/providers';
import { Toaster } from 'sonner';
import { ThemeProvider } from '@material-tailwind/react';

const Providers = ({ children }: React.PropsWithChildren) => {
  return (
    <ConfigProvider theme={{}}>
      <StyleProvider hashPriority='high'>
        <TanStackQueryProviders>
          <ThemeProvider>{children}</ThemeProvider>
          <Toaster position='top-right' richColors expand closeButton />
        </TanStackQueryProviders>
      </StyleProvider>
    </ConfigProvider>
  );
};

export default Providers;
