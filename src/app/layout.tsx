export const metadata = {
  title: {
    default: 'Instagram clone',
    template: 'Hebi | Instagram clone',
  },
  description: 'Instagram clone application built with Next.js, TypeScript, and MirageJS for mock API.',
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