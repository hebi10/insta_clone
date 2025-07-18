import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { email, fullName, username, password } = await request.json();

    // 입력 데이터 검증
    if (!email || !fullName || !username || !password) {
      return NextResponse.json(
        { message: '모든 필드를 입력해주세요.' },
        { status: 400 }
      );
    }

    // 이메일 형식 검증
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { message: '올바른 이메일 형식이 아닙니다.' },
        { status: 400 }
      );
    }

    // 사용자 이름 검증
    if (username.length < 3) {
      return NextResponse.json(
        { message: '사용자 이름은 최소 3자 이상이어야 합니다.' },
        { status: 400 }
      );
    }

    // 비밀번호 검증
    if (password.length < 6) {
      return NextResponse.json(
        { message: '비밀번호는 최소 6자 이상이어야 합니다.' },
        { status: 400 }
      );
    }

    // Mock 구현 - 중복 체크 시뮬레이션
    const existingUsers = ['test@example.com', 'testuser', 'admin'];
    if (existingUsers.includes(email) || existingUsers.includes(username)) {
      return NextResponse.json(
        { message: '이미 사용중인 이메일 또는 사용자 이름입니다.' },
        { status: 409 }
      );
    }

    // Mock 사용자 생성 (실제 구현에서는 데이터베이스에 저장)
    const newUser = {
      id: Date.now().toString(),
      email,
      fullName,
      username,
      createdAt: new Date().toISOString(),
      avatar: '/images/default-avatar.png',
      isVerified: false,
    };

    console.log('New user created:', newUser);

    return NextResponse.json(
      { 
        message: '계정이 성공적으로 생성되었습니다.',
        user: {
          id: newUser.id,
          email: newUser.email,
          fullName: newUser.fullName,
          username: newUser.username,
          avatar: newUser.avatar,
        }
      },
      { status: 201 }
    );

  } catch (error) {
    console.error('Signup error:', error);
    return NextResponse.json(
      { message: '서버 오류가 발생했습니다.' },
      { status: 500 }
    );
  }
}
