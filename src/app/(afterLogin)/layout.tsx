import LeftSide from "./_components/leftSide";
import { LeftArea } from "./AfterLoginPage.style";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>
        <LeftArea>
          <LeftSide />
        </LeftArea>
        {children}
      </body>
    </html>
  );
}