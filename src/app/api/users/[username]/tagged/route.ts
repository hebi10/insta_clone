import { faker } from '@faker-js/faker';
import { NextResponse } from 'next/server';

export async function GET(
  request: Request,
  { params }: { params: Promise<{ username: string }> }
) {
  try {
    const { username } = await params;

    const posts = Array.from({ length: 8 }, () => ({
      id: faker.string.uuid(),
      imageUrl: faker.image.urlPicsumPhotos({ width: 400, height: 400 }),
      likeCount: faker.number.int({ min: 50, max: 1000 }),
      commentCount: faker.number.int({ min: 5, max: 100 }),
      createdAt: faker.date.recent({ days: 30 }).toISOString(),
    }));

    return NextResponse.json({ posts });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch tagged posts' },
      { status: 500 }
    );
  }
}
