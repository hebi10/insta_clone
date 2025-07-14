'use client';
import StyledComponentsRegistry from "./_lib/registry";
import GlobalStyle from '@/app/_styles/global.style';
import FontsStyle from '@/app/_styles/fonts.style';
import { ThemeProvider } from "styled-components";
import { theme } from "@/app/_styles/theme";
import ReactQueryProvider from './_lib/react-query-provider';
import { useEffect } from 'react';
import { makeServer } from '@/mirage/server';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    makeServer();
  }, []);

  return (
    <html lang="ko">
      <body>
        <StyledComponentsRegistry>
          <ThemeProvider theme={theme}>
            <ReactQueryProvider>
              <GlobalStyle />
              <FontsStyle />
              {children}
            </ReactQueryProvider>
          </ThemeProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}