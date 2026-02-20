export const metadata = {
  title: {
    default: 'Instagram Clone',
    template: '%s | Instagram Clone',
  },
  description: 'Next.js + React Query 기반 Instagram 클론 프로젝트',
};

import Providers from './providers';

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {

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