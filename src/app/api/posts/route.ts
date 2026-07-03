import { NextResponse } from 'next/server';
import { posts } from '../mock-data';

export async function GET() {
  return NextResponse.json({ posts });
}

export async function POST(request: Request) {
  try {
    const { caption = '', tags = [], imageUrl } = await request.json();

    return NextResponse.json({
      post: {
        id: `post-${Date.now()}`,
        username: 'testuser',
        avatarUrl: '/images/default-avatar.png',
        imageUrl: imageUrl || 'https://picsum.photos/seed/created-post/1080/1080',
        description: caption,
        likeCount: 0,
        commentCount: 0,
        tags,
        createdAt: new Date().toISOString(),
      },
    });
  } catch {
    return NextResponse.json(
      { error: 'Failed to create post' },
      { status: 500 }
    );
  }
}
