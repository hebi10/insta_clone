import { faker } from '@faker-js/faker';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const chats = Array.from({ length: 10 }, () => ({
      id: faker.string.uuid(),
      username: faker.internet.username(),
      name: faker.person.fullName(),
      avatar: faker.image.avatar(),
      lastMessage: faker.lorem.sentence(),
      timestamp: faker.date.recent({ days: 3 }).toISOString(),
      isOnline: faker.datatype.boolean(),
      unreadCount: faker.number.int({ min: 0, max: 5 }),
    }));

    return NextResponse.json({ chats });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch chats' },
      { status: 500 }
    );
  }
}
