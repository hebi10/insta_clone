import { NextResponse } from 'next/server';
import { chats } from '../mock-data';

export async function GET() {
  return NextResponse.json({ chats });
}
