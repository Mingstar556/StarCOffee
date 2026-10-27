export interface MenuItem {
  id: string;
  name: string;
  category: 'espresso' | 'specialty' | 'cold' | 'bakery';
  price: number;
  description: string;
  badge: string | null;
  image: string;
}

export const INITIAL_MENU_ITEMS: MenuItem[] = [
  // Espresso & Brews
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
    name: 'Traditional Cortado',
    category: 'espresso',
    price: 4.75,
    description: 'Equal parts robust espresso and steamed textured milk, served in a classic glass.',
    badge: null,
    image: 'https://images.unsplash.com/photo-1534778101976-62847782c213?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: '4',
    name: 'Classic Flat White',
    category: 'espresso',
    price: 5.25,
    description: 'Rich ristretto shots crowned with micro-textured velvety milk and a delicate latte art finish.',
    badge: null,
    image: 'https://images.unsplash.com/photo-1577968897966-3d4325b36b61?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: '5',
    name: 'Honduras Dark Roast Espresso',
    category: 'espresso',
    price: 4.50,
    description: 'Bold double shot with intense body, bittersweet cocoa notes, and a clean caramel finish.',
    badge: 'Strong',
    image: 'https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: '6',
    name: 'Macchiato Superior',
    category: 'espresso',
    price: 4.25,
    description: 'Single origin espresso stained with a dollop of silky oat microfoam.',
    badge: null,
    image: 'https://images.unsplash.com/photo-1485808191679-edf86b1fb66c?q=80&w=800&auto=format&fit=crop'
  },

  // Specialty Lattes
  {
    id: '7',
    name: 'Ceremonial Matcha Latte',
    category: 'specialty',
    price: 6.75,
    description: 'Uji ceremonial grade green tea whisked smooth with steamed oat milk and vanilla bean syrup.',
    badge: 'Organic',
    image: 'https://images.unsplash.com/photo-1536256263959-770b48d82b08?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: '8',
    name: 'Golden Turmeric Chai',
    category: 'specialty',
    price: 6.00,
    description: 'Spiced black tea infused with fresh turmeric root, ginger, cardamom, and steamed almond milk.',
    badge: 'Wellness',
    image: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: '9',
    name: 'Madagascar Vanilla Bean Mocha',
    category: 'specialty',
    price: 6.85,
    description: 'Dark single-origin chocolate ganache melted with double espresso, steamed milk, and vanilla caviar.',
    badge: 'Decadent',
    image: 'https://images.unsplash.com/photo-1530373239216-42518e6b4039?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: '10',
    name: 'Lavender Honey Raf',
    category: 'specialty',
    price: 6.50,
    description: 'Espresso whipped with heavy cream, lavender blossom infusion, and wildflower honey.',
    badge: 'Chef Choice',
    image: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: '11',
    name: 'Salted Caramel Macadamia Latte',
    category: 'specialty',
    price: 6.95,
    description: 'Macadamia nut milk, house-made salted caramel drizzle, and double espresso.',
    badge: 'Popular',
    image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?q=80&w=800&auto=format&fit=crop'
  },

  // Cold & Iced Brews
  {
    id: '12',
    name: 'Velvet Cold Brew',
    category: 'cold',
    price: 5.25,
    description: 'Steeped for 18 hours in cold spring water. Smooth, low acidity with deep dark chocolate undertones.',
    badge: 'Smooth',
    image: 'https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: '13',
    name: 'Nitro Cold Brew Float',
    category: 'cold',
    price: 7.25,
    description: 'Draft nitro cold brew topped with a scoop of organic Madagascar vanilla bean gelato.',
    badge: 'Staff Pick',
    image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: '14',
    name: 'Iced Spanish Latte',
    category: 'cold',
    price: 6.25,
    description: 'Espresso poured over ice with a layer of sweetened condensed milk and whole milk.',
    badge: null,
    image: 'https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: '15',
    name: 'Sparkling Cascara Tonic',
    category: 'cold',
    price: 5.85,
    description: 'Coffee cherry tea infused with botanicals, chilled and charged with effervescent sparkling water.',
    badge: 'Refreshing',
    image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: '16',
    name: 'Iced Coconut Cold Brew',
    category: 'cold',
    price: 6.00,
    description: 'Cold brew layered over refreshing organic coconut water and a splash of oat milk.',
    badge: 'Tropical',
    image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?q=80&w=800&auto=format&fit=crop'
  },

  // Artisanal Bakery
  {
    id: '17',
    name: 'Almond Butter Croissant',
    category: 'bakery',
    price: 4.50,
    description: 'Flaky, all-butter French croissant filled with rich almond frangipane and toasted sliced almonds.',
    badge: 'Freshly Baked',
    image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: '18',
    name: 'Cardamom Morning Bun',
    category: 'bakery',
    price: 4.25,
    description: 'Laminated brioche dough rolled with aromatic crushed cardamom, organic cane sugar, and orange zest.',
    badge: null,
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: '19',
    name: 'Dark Chocolate Sea Salt Scone',
    category: 'bakery',
    price: 4.00,
    description: 'Buttery artisanal scone loaded with Valrhona dark chocolate chunks and flaked Maldon sea salt.',
    badge: 'Artisanal',
    image: 'https://images.unsplash.com/photo-1587314168485-3236d6710814?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: '20',
    name: 'Pistachio Rose Cake',
    category: 'bakery',
    price: 5.50,
    description: 'Moist pistachio sponge cake layered with delicate rosewater buttercream and crushed pistachios.',
    badge: 'Signature',
    image: 'https://images.unsplash.com/photo-1535141192574-5d4897c13136?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: '21',
    name: 'Avocado Sourdough Toast',
    category: 'bakery',
    price: 7.50,
    description: 'Thick-cut house sourdough, smashed avocado, heirloom cherry tomatoes, sesame seeds, and chili oil.',
    badge: 'Brunch',
    image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?q=80&w=800&auto=format&fit=crop'
  }
];
