'use client';
import StyledComponentsRegistry from "./_lib/registry";
import GlobalStyle from '@/app/_styles/global.style';
import FontsStyle from '@/app/_styles/fonts.style';
import { ThemeProvider } from "styled-components";
import { theme } from "@/app/_styles/theme";
import { useState, useEffect } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { SessionProvider } from "next-auth/react";
import { makeServer } from "@/mock/server";

interface ProvidersProps {
  children: React.ReactNode;
  session?: any;
}

export default function Providers({ children, session }: ProvidersProps) {
  const [client] = useState(() => new QueryClient());

  // Mock 서버 초기화 (개발 환경에서만)
  useEffect(() => {
    if (typeof window !== 'undefined' && (process.env.NODE_ENV === 'development' || process.env.NEXT_PUBLIC_MODE === 'development')) {
      // 중복 초기화 방지를 위한 플래그
      if ((window as any).__MIRAGE_INITIALIZED__) {
        return;
      }
      
      try {
        (window as any).server = makeServer();
        (window as any).__MIRAGE_INITIALIZED__ = true;
        console.log('MirageJS 서버가 초기화되었습니다.');
      } catch (error) {
        console.error('MirageJS 서버 초기화 실패:', error);
      }
    }
  }, []);

  return (
    <QueryClientProvider client={client}>
      <SessionProvider>
        <ThemeProvider theme={theme}>
          <StyledComponentsRegistry>
            <GlobalStyle />
            <FontsStyle />
            {children}
          </StyledComponentsRegistry>
        </ThemeProvider>
      </SessionProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
