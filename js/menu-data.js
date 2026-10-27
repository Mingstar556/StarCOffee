/**
 * Star Coffee — Centralized Menu Data Store & Backend State Template
 * Manages dynamic coffee items, seeding, localStorage persistence, and admin additions.
 */

const DEFAULT_MENU_ITEMS = [
  {
    id: '1',
    name: 'Signature Star Latte',
    category: 'espresso',
    price: 6.50,
    description: 'Double shot of espresso, velvety microfoam, organic wildflower honey, and a dusting of cinnamon.',
    badge: 'Best Seller',
    image: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: '2',
    name: 'Ethiopian Pour Over',
    category: 'espresso',
    price: 5.75,
    description: 'Single origin Yirgacheffe brewed meticulously. Bright notes of bergamot, jasmine, and stone fruit.',
    badge: 'Single Origin',
    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: '3',
    name: 'Velvet Cold Brew',
    category: 'cold',
    price: 5.25,
    description: 'Steeped for 18 hours in cold spring water. Smooth, low acidity with deep dark chocolate undertones.',
    badge: 'Smooth',
    image: 'https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: '4',
    name: 'Traditional Cortado',
    category: 'espresso',
    price: 4.75,
    description: 'Equal parts robust espresso and steamed textured milk, served in a classic glass.',
    badge: null,
    image: 'https://images.unsplash.com/photo-1534778101976-62847782c213?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: '5',
    name: 'Ceremonial Matcha Latte',
    category: 'specialty',
    price: 6.75,
    description: 'Uji ceremonial grade green tea whisked smooth with steamed oat milk and vanilla bean syrup.',
    badge: 'Organic',
    image: 'https://images.unsplash.com/photo-1536256263959-770b48d82b08?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: '6',
    name: 'Golden Turmeric Chai',
    category: 'specialty',
    price: 6.00,
    description: 'Spiced black tea infused with fresh turmeric root, ginger, cardamom, and steamed almond milk.',
    badge: null,
    image: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: '7',
    name: 'Nitro Cold Brew Float',
    category: 'cold',
    price: 7.25,
    description: 'Draft nitro cold brew topped with a scoop of organic Madagascar vanilla bean gelato.',
    badge: 'Staff Pick',
    image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: '8',
    name: 'Iced Spanish Latte',
    category: 'cold',
    price: 6.25,
    description: 'Espresso poured over ice with a layer of sweetened condensed milk and whole milk.',
    badge: null,
    image: 'https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: '9',
    name: 'Almond Butter Croissant',
    category: 'bakery',
    price: 4.50,
    description: 'Flaky, all-butter French croissant filled with rich almond frangipane and toasted sliced almonds.',
    badge: 'Freshly Baked',
    image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: '10',
    name: 'Cardamom Morning Bun',
    category: 'bakery',
    price: 4.25,
    description: 'Laminated brioche dough rolled with aromatic crushed cardamom, organic cane sugar, and orange zest.',
    badge: null,
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=800&auto=format&fit=crop'
  }
];

// Initialize menu items in localStorage if not present
function getMenuItems() {
  const stored = localStorage.getItem('star_coffee_menu_items');
  if (!stored) {
    localStorage.setItem('star_coffee_menu_items', JSON.stringify(DEFAULT_MENU_ITEMS));
    return DEFAULT_MENU_ITEMS;
  }
  try {
    return JSON.parse(stored);
  } catch (e) {
    return DEFAULT_MENU_ITEMS;
  }
}

function saveMenuItems(items) {
  localStorage.setItem('star_coffee_menu_items', JSON.stringify(items));
}

function addMenuItem(newItem) {
  const items = getMenuItems();
  const itemWithId = {
    ...newItem,
    id: Date.now().toString(),
    price: parseFloat(newItem.price) || 5.00
  };
  items.push(itemWithId);
  saveMenuItems(items);
  return itemWithId;
}

function resetMenuToDefault() {
  localStorage.setItem('star_coffee_menu_items', JSON.stringify(DEFAULT_MENU_ITEMS));
  return DEFAULT_MENU_ITEMS;
}
