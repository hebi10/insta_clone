import { faker } from '@faker-js/faker';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const exploreContent = Array.from({ length: 30 }, () => ({
      id: faker.string.uuid(),
      imageUrl: faker.image.urlPicsumPhotos({ width: 400, height: 400 }),
      likeCount: faker.number.int({ min: 50, max: 5000 }),
      commentCount: faker.number.int({ min: 5, max: 300 }),
      type: faker.helpers.arrayElement(['photo', 'video', 'carousel']),
      createdAt: faker.date.recent({ days: 14 }).toISOString(),
    }));

    return NextResponse.json({ exploreContent });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch explore content' },
      { status: 500 }
    );
  }
}
