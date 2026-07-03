import { NextResponse } from 'next/server';
import { getChat } from '../../mock-data';

export async function GET(
  request: Request,
  { params }: { params: Promise<{ chatId: string }> }
) {
  const { chatId } = await params;
  return NextResponse.json({ chat: getChat(chatId) });
}
