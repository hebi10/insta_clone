import { NextResponse } from 'next/server';
import { posts } from '../../../mock-data';

export async function GET() {
  return NextResponse.json({ posts: posts.slice(3, 6) });
}
