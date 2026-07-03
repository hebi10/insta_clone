import { NextResponse } from 'next/server';
import { exploreContent } from '../mock-data';

export async function GET() {
  return NextResponse.json({ exploreContent });
}
