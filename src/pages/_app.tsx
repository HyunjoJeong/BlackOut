import { MobileLayout } from '@/global/layouts';
import '@/global/styles/globals.css';
import { theme } from '@/global/styles/theme';
import { ThemeProvider } from '@emotion/react';
import type { AppProps } from 'next/app';
import Head from 'next/head';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Black Out</title>
        <meta name="description" content="자.하.연" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <ThemeProvider theme={theme}>
        <MobileLayout>
          <Component {...pageProps} />
        </MobileLayout>
      </ThemeProvider>
    </>
  );
}
