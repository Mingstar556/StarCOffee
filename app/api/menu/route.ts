import { NextResponse } from 'next/server';
import { INITIAL_MENU_ITEMS, MenuItem } from '@/lib/menuData';

// In-memory store for demo session persistence
let menuStore: MenuItem[] = [...INITIAL_MENU_ITEMS];

export async function GET() {
  return NextResponse.json({ success: true, data: menuStore });
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, category, price, description, badge, image } = body;

    if (!name || !category || !price) {
      return NextResponse.json(
        { success: false, error: 'Name, category, and price are required.' },
        { status: 400 }
      );
    }

    const newItem: MenuItem = {
      id: Date.now().toString(),
      name,
      category,
      price: parseFloat(price) || 5.00,
      description: description || 'Artisanal creation crafted by Star Coffee masters.',
      badge: badge || null,
      image: image || 'https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=800&auto=format&fit=crop'
    };

    menuStore.push(newItem);

    return NextResponse.json({ success: true, data: newItem }, { status: 201 });
  } catch (err) {
    return NextResponse.json(
      { success: false, error: 'Invalid request body.' },
      { status: 400 }
    );
  }
}
