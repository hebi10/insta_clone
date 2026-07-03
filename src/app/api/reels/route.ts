import { NextResponse } from 'next/server';
import { reels } from '../mock-data';

export async function GET() {
  return NextResponse.json({ reels });
}
