'use client';

import { useSession } from 'next-auth/react';
import AfterLoginPage from './(afterLogin)/AfterLoginPage';
import BeforeLoginPage from './(beforeLogin)/BeforeLoginPage';

export default function Page() {
  const { data: session, status } = useSession();

  console.log('Session:', session, 'Status:', status);

  if (session) {
    return <AfterLoginPage />;
  }

  return <BeforeLoginPage />;
}
