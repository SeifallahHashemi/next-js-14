import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Providers from '@/components/providers/providers';
import HeaderPage from '@/components/UI/Header/header-page';
import HideShowNavbar from "@/components/Animations/Scroll Animations/Navigation/hide-show-navbar";
import Animate from "@/components/Animations/PageTransitionWrapper/animate";
import localFont from 'next/font/local'

const inter = Inter({ subsets: ['latin'] });
const perFont = localFont({
  src: "./../../public/Fonts/iransansdn.woff",
  variable: "--perFont",
  style: "swap",
})
const vazirFont = localFont({
  src: "./../../public/Fonts/VAZIR-FD-WOL.woff",
  variable: "--vazirFont",
  style: "swap",
})
export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
  manifest: '/manifest.webmanifest'
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={`${inter.className} ${perFont.variable} ${vazirFont.variable} min-h-screen w-[100vw] max-w-[100vw] overflow-x-hidden`}>
        <main className={'absolute h-[auto] w-screen bg-[linear-gradient(to_right,#2b385f1a_1px,transparent_1px),linear-gradient(to_bottom,#2b385f1a_1px,transparent_1px)] bg-[size:42px_42px] bg-[#F9FAFC] dark:bg-[#060719]'}>
          {/*<main className={'absolute h-[auto] w-full pattern-graph-zinc-100/50 pattern-graph-scale-[2.5] dark:pattern-graph-zinc-900/25 dark:pattern-graph-scale-[2] bg-[#F9FAFC] dark:bg-[#060719]'}>*/}
          <Providers>
            <HeaderPage />
            {/*<HideShowNavbar />*/}
              {children}
          </Providers>
        </main>
      </body>
    </html>
  );
}
