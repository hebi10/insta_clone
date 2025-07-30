import { faker } from '@faker-js/faker';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const reels = Array.from({ length: 15 }, () => ({
      id: faker.string.uuid(),
      username: faker.internet.username(),
      avatarUrl: faker.image.avatar(),
      videoUrl: faker.image.urlPicsumPhotos({ width: 400, height: 600 }), // 동영상 대신 세로 이미지 사용
      description: faker.lorem.sentence(),
      likeCount: faker.number.int({ min: 1, max: 10000 }),
      commentCount: faker.number.int({ min: 1, max: 500 }),
      shareCount: faker.number.int({ min: 0, max: 100 }),
      createdAt: faker.date.recent({ days: 7 }).toISOString(),
    }));

    return NextResponse.json({ reels });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch reels' },
      { status: 500 }
    );
  }
}
