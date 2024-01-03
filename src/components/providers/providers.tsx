'use client';
import React from 'react';
import { ConfigProvider, theme } from 'antd';
import { StyleProvider } from '@ant-design/cssinjs';
import TanStackQueryProviders from '@/utils/providers';
import { Toaster } from 'sonner';
import ThemeProvider from '@/components/providers/theme-provider';
import { NextUIProvider } from '@nextui-org/react';

const Providers = ({ children }: React.PropsWithChildren) => {
  return (
    <ConfigProvider theme={{}}>
      <StyleProvider hashPriority='high'>
        <TanStackQueryProviders>
          <NextUIProvider>
            <ThemeProvider
              attribute={'class'}
              defaultTheme={'system'}
              enableSystem
            >
              {children}
            </ThemeProvider>
          </NextUIProvider>
          <Toaster position='top-right' richColors expand closeButton />
        </TanStackQueryProviders>
      </StyleProvider>
    </ConfigProvider>
  );
};

export default Providers;
