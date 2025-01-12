import { APIServer } from '@/config/axios';
import { useEffect, useCallback, useState } from 'react';
import { useRouter } from 'next/router';
import dayjs from 'dayjs';

export default function GoogleCallback() {
  const router = useRouter();
  const [didRun, setDidRun] = useState(false);

  const handleCallback = useCallback(async () => {
    try {
      const hash = window.location.hash.substring(1);
      if (!hash) {
        console.error('Hash not found in URL');
        router.replace("/");
        return;
      }

      const params = new URLSearchParams(hash);
      const tokens = {
        access_token: params.get("access_token"),
        expires_at: params.get("expires_at"),
        expires_in: params.get("expires_in"),
        provider_token: params.get("provider_token"),
        refresh_token: params.get("refresh_token"),
        token_type: params.get("token_type"),
      };

      if (!tokens.access_token || !tokens.refresh_token) {
        throw new Error(`필수 토큰 누락: access_token=${!!tokens.access_token}, refresh_token=${!!tokens.refresh_token}`);
      }

      try {
        console.log("전송되는 토큰 데이터", tokens);

        const { data } = await APIServer.post('/auth/google/callback/', tokens, {
          withCredentials: true,
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          }
        });
        
        console.log('서버 응답 성공:', data);
        
        const expires = dayjs().utc(true).endOf('day').toDate().toUTCString();
        document.cookie = `access_token=${data.access_token}; path=/; secure=true; expires=${expires}`;
        document.cookie = `refresh_token=${data.refresh_token}; path=/; secure=true`;

        router.replace('/');
      } catch (apiError: any) {
        console.error('서버 API 호출 실패:', {
          status: apiError?.response?.status,
          statusText: apiError?.response?.statusText,
          data: apiError?.response?.data,
          message: apiError.message,
          url: apiError?.config?.url,
          headers: apiError?.config?.headers,
          method: apiError?.config?.method
        });
        throw apiError;
      }
    } catch (error: any) {
      console.error('Google 로그인 처리 실패:', {
        name: error.name,
        message: error.message,
        stack: error.stack
      });
    //   router.replace('/');
    }
  }, [router]);

  useEffect(() => {
    if (!didRun) {
      handleCallback();
      setDidRun(true);
    }
  }, [didRun, handleCallback]);

  return <div>로그인 처리중...</div>;
}