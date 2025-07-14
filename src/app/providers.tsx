'use client';
import StyledComponentsRegistry from "./_lib/registry";
import GlobalStyle from '@/app/_styles/global.style';
import FontsStyle from '@/app/_styles/fonts.style';
import { ThemeProvider } from "styled-components";
import { theme } from "@/app/_styles/theme";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <StyledComponentsRegistry>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <FontsStyle />
        {children}
      </ThemeProvider>
    </StyledComponentsRegistry>
  );
}
