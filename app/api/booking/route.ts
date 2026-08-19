import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  const body = await request.json();
  console.log('📩 Booking received:', body);

  // Simulate async processing (no DB)
  await new Promise((resolve) => setTimeout(resolve, 1500));

  return NextResponse.json(
    { success: true, message: 'Booking confirmed (demo)' },
    { status: 201 }
  );
}