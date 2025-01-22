import { sliderList } from '@/constants/banner-area-data';
import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json(sliderList);
}
