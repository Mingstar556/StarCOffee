# ☕ Star Coffee — Artisanal Roasters & Brews

A modern, full-stack specialty coffee house web application built with **Next.js 14 App Router**, **TypeScript**, **Tailwind CSS**, and **GSAP**. Features an interactive menu, responsive cart with live order checkout, in-memory REST API endpoints, and a warm artisanal espresso aesthetic.

---

## ✨ Features

- **⚡ Next.js 14 App Router & TypeScript**: Modular, type-safe architecture using server and client components.
- **🎨 Custom Artisanal Theme**: Deep espresso dark palette (`#1b1412`, `#c88a58`, `#e0b084`, `#fcf8f2`) styled with Tailwind CSS and glassmorphic micro-interactions.
- **📜 21+ Handcrafted Menu Offerings**:
  - **Espresso & Brews**: Signature Star Latte, Ethiopian Pour Over, Cortado, Flat White, and more.
  - **Specialty Lattes**: Ceremonial Matcha, Golden Turmeric Chai, Lavender Honey Raf, etc.
  - **Cold & Iced Brews**: 18-hour Velvet Cold Brew, Nitro Float, Cascara Tonic, etc.
  - **Artisanal Bakery**: Almond Butter Croissants, Cardamom Morning Buns, Pistachio Rose Cake.
- **🔍 Live Search & Filter**: Instant client-side filtering by category and search queries.
- **🛒 Interactive Cart & Checkout**: Slide-over drawer with item increment/decrement, subtotal calculation, and instant order placement.
- **🚀 Built-in REST API Endpoints**:
  - `GET /api/menu`: Fetch menu items.
  - `POST /api/menu`: Add new items dynamically via Admin modal.
  - `POST /api/orders`: Process orders and return generated order IDs with estimated fulfillment times.
- **✨ Smooth Animations**: GSAP ScrollTrigger animations, steam particles, and liquid transitions.
- **🌐 Standalone Static Fallback**: Includes standalone HTML/JS files (`index.html`, `menu.html`, `contact.html`) for zero-dependency static deployments.

---

## 📁 Project Structure

```text
StarCoffee/
├── app/
│   ├── api/
│   │   ├── menu/
│   │   │   └── route.ts        # GET & POST menu items API
│   │   └── orders/
│   │       └── route.ts        # POST checkout & order placement API
│   ├── contact/
│   │   └── page.tsx            # Contact, roastery hours, interactive form & map
│   ├── menu/
│   │   └── page.tsx            # Full interactive menu, filtering, cart, admin modal
│   ├── globals.css             # Tailwind base styles, glass effects, animations
│   ├── layout.tsx              # Root layout with Next.js font optimization
│   └── page.tsx                # Hero landing page, brand pillars, featured items
├── lib/
│   └── menuData.ts             # Initial menu items, types, and categories
├── js/
│   └── menu-data.js            # Menu dataset for standalone static version
├── index.html                  # Standalone static landing page
├── menu.html                   # Standalone static menu page
├── contact.html                # Standalone static contact page
├── next.config.js              # Next.js configuration (remote image patterns)
├── tailwind.config.js          # Tailwind CSS palette and font configuration
├── postcss.config.js           # PostCSS configuration for Tailwind
├── tsconfig.json               # TypeScript compiler settings
├── .eslintrc.json              # ESLint configuration
└── package.json                # Project dependencies and npm scripts
```

---

## 🛠️ Getting Started

### Prerequisites

- Node.js 18.17+ or later
- npm or yarn or pnpm

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Mingstar556/StarCOffee.git
   cd StarCoffee
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🚀 Build & Production

To create an optimized production build:

```bash
# Build the application
npm run build

# Start the production server
npm run start
```

To run linting:
```bash
npm run lint
```

---

## 📡 API Reference

### `GET /api/menu`
Returns all current menu items.

### `POST /api/menu`
Adds a new item to the menu.
- **Body**: `{ "name": string, "category": string, "price": number, "description": string, "badge"?: string, "image"?: string }`

### `POST /api/orders`
Submits a checkout order.
- **Body**: `{ "items": Array<{ id: string, name: string, price: number, qty: number }>, "total": number }`
- **Response**: `{ "success": true, "orderId": "ORD-123456", "total": number, "estimatedTime": "15-20 minutes" }`

---

## 📄 License

This project is licensed under the MIT License.