import { NextResponse } from 'next/server';
import { searchMockData } from '../mock-data';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  return NextResponse.json(searchMockData(searchParams.get('q') || ''));
}
