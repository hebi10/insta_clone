'use client';

import AfterLoginPage from './(afterLogin)/AfterLoginPage';
import BeforeLoginPage from './(beforeLogin)/BeforeLoginPage';

export default function Page() {
  
  const session = false;

  if (session) {
    return <AfterLoginPage />;
  }

  return <BeforeLoginPage />;
}
