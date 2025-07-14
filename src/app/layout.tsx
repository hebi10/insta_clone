export const metadata = {
  title: {
    default: '인스타 클론',
    template: '해비 | 인스타 클론',
  },
  description: '인스타 클론 프로젝트입니다.',
};

import Providers from './providers';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}