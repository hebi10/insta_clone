import { faker } from '@faker-js/faker';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    // 모든 게시물 가져오기
    const posts = Array.from({ length: 20 }, () => ({
      id: faker.string.uuid(),
      username: faker.internet.userName(),
      avatarUrl: faker.image.avatar(),
      imageUrl: faker.image.urlPicsumPhotos({ width: 600, height: 400 }),
      description: faker.lorem.sentence(),
      likeCount: faker.number.int({ min: 1, max: 5000 }),
      commentCount: faker.number.int({ min: 1, max: 200 }),
      createdAt: faker.date.recent({ days: 30 }).toISOString(),
    }));

    return NextResponse.json({ posts });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch posts' },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { caption, tags, imageUrl } = body;

    // 새 게시물 생성 시뮬레이션
    const newPost = {
      id: faker.string.uuid(),
      username: 'current_user', // 실제로는 인증된 사용자 정보를 가져와야 함
      avatarUrl: faker.image.avatar(),
      imageUrl: imageUrl || faker.image.urlPicsumPhotos({ width: 600, height: 400 }),
      description: caption,
      likeCount: 0,
      commentCount: 0,
      tags: tags || [],
      createdAt: new Date().toISOString(),
    };

    return NextResponse.json({ post: newPost });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to create post' },
      { status: 500 }
    );
  }
}
