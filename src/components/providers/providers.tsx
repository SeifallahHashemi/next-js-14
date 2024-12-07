'use client';

import React from 'react';

import TanStackQueryProviders from '@/utils/providers';
import { StyleProvider } from '@ant-design/cssinjs';
import { NextUIProvider } from '@nextui-org/react';
import { ConfigProvider, theme } from 'antd';
import { IconContext } from 'react-icons';
import { Toaster } from 'sonner';

import ThemeProvider from '@/components/providers/theme-provider';

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
              <IconContext.Provider value={{ size: '1.75em' }}>
                {children}
              </IconContext.Provider>
            </ThemeProvider>
          </NextUIProvider>
          <Toaster position='top-right' richColors expand closeButton />
        </TanStackQueryProviders>
      </StyleProvider>
    </ConfigProvider>
  );
};

export default Providers;
