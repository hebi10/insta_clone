import { faker } from '@faker-js/faker';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const query = searchParams.get('q') || '';

    // 검색 결과 시뮬레이션
    const users = Array.from({ length: 10 }, () => ({
      id: faker.string.uuid(),
      username: query ? `${query}_${faker.internet.username()}` : faker.internet.username(),
      fullName: faker.person.fullName(),
      avatar: faker.image.avatar(),
      isVerified: faker.datatype.boolean(),
      followersCount: faker.number.int({ min: 100, max: 50000 }),
      bio: faker.lorem.sentence(),
    }));

    const hashtags = Array.from({ length: 5 }, () => ({
      id: faker.string.uuid(),
      tag: query ? `${query}_${faker.lorem.word()}` : faker.lorem.word(),
      postCount: faker.number.int({ min: 100, max: 1000000 }),
    }));

    const places = Array.from({ length: 3 }, () => ({
      id: faker.string.uuid(),
      name: faker.location.city(),
      category: faker.company.buzzNoun(),
      postCount: faker.number.int({ min: 50, max: 10000 }),
    }));

    return NextResponse.json({
      users,
      hashtags,
      places,
    });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to search' },
      { status: 500 }
    );
  }
}
