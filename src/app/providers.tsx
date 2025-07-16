'use client';
import StyledComponentsRegistry from "./_lib/registry";
import GlobalStyle from '@/app/_styles/global.style';
import FontsStyle from '@/app/_styles/fonts.style';
import { ThemeProvider } from "styled-components";
import { theme } from "@/app/_styles/theme";
import { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { SessionProvider } from "next-auth/react";

interface ProvidersProps {
  children: React.ReactNode;
  session?: any;
}

export default function Providers({ children, session }: ProvidersProps) {
  const [client] = useState(() => new QueryClient());

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
