import { faker } from '@faker-js/faker';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { id, password } = await request.json();

    // Mock 사용자 데이터 (실제 프로젝트에서는 데이터베이스 연결)
    const mockUsers = [
      {
        id: 'test@test.com',
        email: 'test@test.com',
        username: 'testuser',
        password: '1234',
        avatarUrl: faker.image.avatar(),
      },
      {
        id: 'admin@admin.com',
        email: 'admin@admin.com',
        username: 'admin',
        password: 'admin',
        avatarUrl: faker.image.avatar(),
      },
      {
        id: 'user@user.com',
        email: 'user@user.com',
        username: 'user',
        password: 'user',
        avatarUrl: faker.image.avatar(),
      },
    ];

    // 사용자 인증
    const user = mockUsers.find(u => u.id === id && u.password === password);

    if (user) {
      // 패스워드를 제외한 사용자 정보 반환
      const { password: _, ...userWithoutPassword } = user;
      return NextResponse.json({
        ...userWithoutPassword,
        token: 'mock-jwt-token', // 실제로는 JWT 토큰 생성
      });
    }

    return NextResponse.json(
      { error: '이메일 또는 비밀번호가 올바르지 않습니다.' },
      { status: 401 }
    );
  } catch (error) {
    console.error('Login error:', error);
    return NextResponse.json(
      { error: '로그인 처리 중 오류가 발생했습니다.' },
      { status: 500 }
    );
  }
}
