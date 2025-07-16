import { faker } from '@faker-js/faker';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const notifications = Array.from({ length: 25 }, () => ({
      id: faker.string.uuid(),
      type: faker.helpers.arrayElement(['like', 'follow', 'comment', 'mention']),
      username: faker.internet.userName(),
      avatarUrl: faker.image.avatar(),
      message: getNotificationMessage(),
      timestamp: faker.date.recent({ days: 7 }).toISOString(),
      isRead: faker.datatype.boolean(),
      postImageUrl: faker.helpers.maybe(() => 
        faker.image.urlPicsumPhotos({ width: 100, height: 100 }), 
        { probability: 0.7 }
      ),
    }));

    return NextResponse.json({ notifications });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch notifications' },
      { status: 500 }
    );
  }
}

function getNotificationMessage() {
  const types = [
    '님이 회원님의 게시물을 좋아합니다.',
    '님이 회원님을 팔로우하기 시작했습니다.',
    '님이 댓글을 남겼습니다.',
    '님이 회원님을 언급했습니다.',
    '님이 회원님의 스토리를 좋아합니다.',
  ];
  return faker.helpers.arrayElement(types);
}
