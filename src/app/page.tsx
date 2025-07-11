'use client';

import AfterLoginPage from './(afterLogin)/AfterLoginPage';
import BeforeLoginPage from './(beforeLogin)/BeforeLoginPage';

// 임시 로그인 상태 변수: true면 로그인 페이지, false면 비로그인 페이지
// const isLogin = true; 
const isLogin = false;

export default function Page() {
  if (isLogin) {
    return <AfterLoginPage />;
  }
  return <BeforeLoginPage />;
}
