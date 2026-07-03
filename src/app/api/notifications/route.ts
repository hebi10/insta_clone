import { NextResponse } from 'next/server';
import { notifications } from '../mock-data';

export async function GET() {
  return NextResponse.json({ notifications });
}
