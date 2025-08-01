import { auth } from "./auth"
import {NextResponse} from "next/server";

export async function middleware(request: any) {
  const session = await auth();
  const { pathname } = request.nextUrl;
  
  console.log(`Middleware: ${pathname}, session: ${!!session}`);
  
  // 루트 경로 처리
  if (pathname === '/') {
    if (session) {
      // 로그인된 사용자는 afterLogin으로 리다이렉트하지 않고 그대로 유지
      return NextResponse.next();
    } else {
      // 비로그인 사용자는 로그인 페이지로
      return NextResponse.redirect(new URL('/login', request.url));
    }
  }
  
  // beforeLogin 라우트들은 세션이 있으면 홈으로
  if (pathname.startsWith('/(beforeLogin)') || pathname === '/login') {
    if (session) {
      return NextResponse.redirect(new URL('/', request.url));
    }
    return NextResponse.next();
  }
  
  // 나머지 보호된 경로들은 세션 확인
  if (!session) {
    return NextResponse.redirect(new URL('/login', request.url));
  }
  
  return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}