import { NextResponse } from 'next/server';

const mockUsers = [
  { id: 'test@test.com', email: 'test@test.com', username: 'testuser', password: '1234' },
  { id: 'admin@admin.com', email: 'admin@admin.com', username: 'admin', password: 'admin' },
  { id: 'user@user.com', email: 'user@user.com', username: 'user', password: 'user' },
];

export async function POST(request: Request) {
  try {
    const { id, password } = await request.json();
    const user = mockUsers.find((item) => item.id === id && item.password === password);

    if (!user) {
      return NextResponse.json(
        { error: '이메일 또는 비밀번호가 올바르지 않습니다.' },
        { status: 401 }
      );
    }

    return NextResponse.json({
      id: user.id,
      email: user.email,
      username: user.username,
      avatarUrl: '/images/default-avatar.png',
      token: 'mock-jwt-token',
    });
  } catch {
    return NextResponse.json(
      { error: '로그인 처리 중 오류가 발생했습니다.' },
      { status: 500 }
    );
  }
}
