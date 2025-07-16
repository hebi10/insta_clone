import { faker } from '@faker-js/faker';
import { NextResponse } from 'next/server';

export async function GET(
  request: Request,
  { params }: { params: Promise<{ username: string }> }
) {
  try {
    const { username } = await params;

    const user = {
      id: faker.string.uuid(),
      username: username,
      fullName: faker.person.fullName(),
      avatar: faker.image.avatar(),
      bio: faker.lorem.paragraph(2),
      website: faker.internet.url(),
      postsCount: faker.number.int({ min: 50, max: 500 }),
      followersCount: faker.number.int({ min: 100, max: 10000 }),
      followingCount: faker.number.int({ min: 50, max: 1000 }),
      isFollowing: faker.datatype.boolean(),
      isOwnProfile: username === 'myusername', // 현재 사용자인지 확인
      isPrivate: faker.datatype.boolean(),
      isVerified: faker.datatype.boolean(),
    };

    return NextResponse.json({ user });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch user profile' },
      { status: 500 }
    );
  }
}
