"use client";

import LeftSide from "./_components/leftSide";
import { Container, LeftArea } from "./AfterLoginPage.style";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <Container>
      <LeftArea>
        <LeftSide />
      </LeftArea>
      {children}
    </Container>
  );
}