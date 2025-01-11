import { defaultQueryClient } from '@/config/react-query';
import '@/global/styles/globals.css';
import { theme } from '@/global/styles/theme';
import { ThemeProvider } from '@emotion/react';
import { QueryClientProvider } from '@tanstack/react-query';
import type { AppProps } from 'next/app';
import Head from 'next/head';

// * dayjs
import dayjs from 'dayjs';
import timezone from 'dayjs/plugin/timezone';
import utc from 'dayjs/plugin/utc';

// * 서버에서 저장하는 시간 단위가 utc인데, 프론트 서버 및 클라이언트 pc에서 dayjs가 해당 위치에서의 시간 단위를 사용하기 때문에 dayjs를 그대로 사용하면 오차가 발생하므로 utc plugin을 확장
// * 서버의 타임존도 한국으로 맞추기 위해 timezone plugin을 확장
dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.tz.setDefault('Asia/Seoul');

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Black Out</title>
        <meta name="description" content="자.하.연" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <QueryClientProvider client={defaultQueryClient}>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </QueryClientProvider>
    </>
  );
}
