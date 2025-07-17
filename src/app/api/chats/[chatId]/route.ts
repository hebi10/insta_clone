import { faker } from '@faker-js/faker';
import { NextResponse } from 'next/server';

export async function GET(
  request: Request,
  { params }: { params: Promise<{ chatId: string }> }
) {
  try {
    const { chatId } = await params;

    const messages = Array.from({ length: 20 }, () => ({
      id: faker.string.uuid(),
      senderId: faker.helpers.arrayElement(['user1', 'user2']),
      message: faker.lorem.sentence(),
      timestamp: faker.date.recent({ days: 1 }).toISOString(),
      type: faker.helpers.arrayElement(['text', 'image', 'emoji']),
    }));

    const chatDetails = {
      id: chatId,
      username: faker.internet.username(),
      fullName: faker.person.fullName(),
      avatarUrl: faker.image.avatar(),
      isOnline: faker.datatype.boolean(),
      lastSeen: faker.date.recent({ days: 7 }).toISOString(),
      messages: messages.sort((a, b) => 
        new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime()
      ),
    };

    return NextResponse.json({ chat: chatDetails });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch chat details' },
      { status: 500 }
    );
  }
}
