import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { items, total, customerInfo } = body;

    if (!items || items.length === 0) {
      return NextResponse.json(
        { success: false, error: 'No items in order.' },
        { status: 400 }
      );
    }

    const orderId = 'ORD-' + Math.floor(100000 + Math.random() * 900000);

    // Simulate backend order processing
    return NextResponse.json(
      {
        success: true,
        message: 'Order placed successfully via Next.js backend!',
        orderId,
        total: total || 0,
        estimatedTime: '15-20 minutes'
      },
      { status: 201 }
    );
  } catch (err) {
    return NextResponse.json(
      { success: false, error: 'Failed to process order.' },
      { status: 400 }
    );
  }
}
