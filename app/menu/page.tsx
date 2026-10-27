'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { MenuItem } from '@/lib/menuData';

export default function MenuPage() {
  const [items, setItems] = useState<MenuItem[]>([]);
  const [filtered, setFiltered] = useState<MenuItem[]>([]);
  const [category, setCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [cart, setCart] = useState<any[]>([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [adminModalOpen, setAdminModalOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // New item form state
  const [newName, setNewName] = useState('');
  const [newCat, setNewCat] = useState<'espresso' | 'specialty' | 'cold' | 'bakery'>('espresso');
  const [newPrice, setNewPrice] = useState('');
  const [newDesc, setNewDesc] = useState('');
  const [newBadge, setNewBadge] = useState('');
  const [newImage, setNewImage] = useState('');

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    try {
      const res = await fetch('/api/menu');
      const data = await res.json();
      if (data.success) {
        setItems(data.data);
        setFiltered(data.data);
      }
    } catch (e) {
      console.error('Failed to fetch menu');
    }
  };

  useEffect(() => {
    let result = items;
    if (category !== 'all') {
      result = result.filter((i) => i.category === category);
    }
    if (searchQuery.trim() !== '') {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (i) => i.name.toLowerCase().includes(q) || i.description.toLowerCase().includes(q)
      );
    }
    setFiltered(result);
  }, [category, searchQuery, items]);

  const addToCart = (item: MenuItem) => {
    setCart((prev) => {
      const existing = prev.find((i) => i.id === item.id);
      if (existing) {
        return prev.map((i) => (i.id === item.id ? { ...i, qty: i.qty + 1 } : i));
      }
      return [...prev, { ...item, qty: 1 }];
    });
    setToastMessage(`Added "${item.name}" to cart`);
    setTimeout(() => setToastMessage(''), 3000);
  };

  const handleAddItem = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/menu', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: newName,
          category: newCat,
          price: parseFloat(newPrice) || 5.00,
          description: newDesc,
          badge: newBadge || null,
          image: newImage || undefined
        })
      });
      const data = await res.json();
      if (data.success) {
        setItems((prev) => [...prev, data.data]);
        setAdminModalOpen(false);
        setNewName('');
        setNewPrice('');
        setNewDesc('');
        setNewBadge('');
        setNewImage('');
        setToastMessage('New menu item added successfully!');
        setTimeout(() => setToastMessage(''), 3000);
      }
    } catch (e) {
      alert('Failed to add menu item.');
    }
  };

  const cartTotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <div className="min-h-screen bg-espresso text-cream flex flex-col">
      {/* Toast */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 glass px-6 py-3 rounded-2xl shadow-2xl flex items-center gap-3 border-amber/40 animate-bounce">
          <span className="w-2.5 h-2.5 rounded-full bg-amber animate-pulse"></span>
          <p className="text-sm font-medium">{toastMessage}</p>
        </div>
      )}

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-espresso/80 backdrop-blur-md border-b border-amber/10">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber to-gold flex items-center justify-center text-espresso font-bold text-xl shadow-lg shadow-amber/20">
              ★
            </div>
            <span className="font-serif text-2xl font-bold tracking-wide">Star Coffee</span>
          </Link>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            <Link href="/" className="text-warmgray hover:text-cream transition-colors">Home</Link>
            <Link href="/menu" className="text-amber font-semibold">Menu</Link>
            <Link href="/contact" className="text-warmgray hover:text-cream transition-colors">Contact</Link>
          </nav>

          <div className="flex items-center gap-4">
            <button
              onClick={() => setAdminModalOpen(true)}
              className="glass px-4 py-2 rounded-full text-xs font-semibold text-amber hover:bg-amber/10 transition-all hidden sm:block"
            >
              + Add Item (Admin)
            </button>
            <button
              onClick={() => setCartOpen(true)}
              className="relative glass px-4 py-2.5 rounded-full flex items-center gap-2 text-sm font-medium hover:bg-amber/10 transition-all"
            >
              <span>🛒 Cart</span>
              {cart.length > 0 && (
                <span className="bg-amber text-espresso text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                  {cart.reduce((s, i) => s + i.qty, 0)}
                </span>
              )}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden glass p-2.5 rounded-full text-warmgray hover:text-cream"
            >
              ☰
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden glass border-t border-amber/10 px-6 py-4 flex flex-col gap-3">
            <Link href="/" className="text-warmgray hover:text-cream">Home</Link>
            <Link href="/menu" className="text-amber font-semibold">Menu</Link>
            <Link href="/contact" className="text-warmgray hover:text-cream">Contact</Link>
            <button
              onClick={() => { setAdminModalOpen(true); setMobileMenuOpen(false); }}
              className="text-left text-amber font-semibold text-sm pt-2"
            >
              + Add Item (Admin)
            </button>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-1 pt-32 pb-24 max-w-7xl mx-auto px-6 w-full">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-amber text-xs font-semibold tracking-wider uppercase mb-2">Our Offerings</p>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold mb-4">The Artisanal Menu</h1>
          <p className="text-warmgray text-sm sm:text-base">
            Explore 21+ hand-crafted espresso drinks, signature specialty lattes, refreshing cold brews, and freshly baked morning pastries.
          </p>
        </div>

        {/* Search & Filter Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2 glass p-2 rounded-2xl w-full md:w-auto">
            {[
              { id: 'all', label: 'All Items' },
              { id: 'espresso', label: 'Espresso & Brews' },
              { id: 'specialty', label: 'Specialty Lattes' },
              { id: 'cold', label: 'Cold & Iced' },
              { id: 'bakery', label: 'Bakery' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setCategory(tab.id)}
                className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                  category === tab.id
                    ? 'bg-gradient-to-r from-amber to-gold text-espresso shadow-md'
                    : 'text-warmgray hover:text-cream'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="w-full md:w-72 relative">
            <input
              type="text"
              placeholder="Search drinks & pastries..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full glass bg-coffee/50 px-4 py-3 rounded-2xl text-sm focus:outline-none focus:border-amber text-cream placeholder-warmgray"
            />
          </div>
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.length === 0 ? (
            <div className="col-span-full text-center py-20 text-warmgray">
              <p className="text-4xl mb-3">☕</p>
              <p className="text-lg">No menu items found matching your search.</p>
            </div>
          ) : (
            filtered.map((item) => (
              <div key={item.id} className="glass rounded-3xl overflow-hidden flex flex-col group">
                <div className="h-56 overflow-hidden relative">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {item.badge && (
                    <span className="absolute top-4 right-4 bg-espresso/80 backdrop-blur-md text-amber text-xs font-semibold px-3 py-1 rounded-full border border-amber/20">
                      {item.badge}
                    </span>
                  )}
                  <span className="absolute bottom-4 left-4 bg-espresso/80 backdrop-blur-md text-warmgray text-xs font-semibold px-3 py-1 rounded-full capitalize">
                    {item.category}
                  </span>
                </div>
                <div className="p-6 flex flex-col flex-1 justify-between">
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="font-serif text-xl font-bold">{item.name}</h3>
                      <span className="text-amber font-serif font-bold text-lg">${item.price.toFixed(2)}</span>
                    </div>
                    <p className="text-warmgray text-sm mb-6 leading-relaxed">{item.description}</p>
                  </div>
                  <button
                    onClick={() => addToCart(item)}
                    className="w-full py-3 rounded-xl bg-amber/10 border border-amber/30 text-amber font-semibold text-sm hover:bg-amber hover:text-espresso transition-all"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-auto border-t border-amber/10 bg-espresso py-12">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber to-gold flex items-center justify-center text-espresso font-bold">
              ★
            </div>
            <span className="font-serif text-lg font-bold">Star Coffee</span>
          </div>
          <p className="text-warmgray text-sm">© 2026 Star Coffee Roasters. Powered by Next.js Backend.</p>
          <div className="flex gap-6 text-sm text-warmgray">
            <Link href="/" className="hover:text-cream">Privacy</Link>
            <Link href="/" className="hover:text-cream">Terms</Link>
            <Link href="/contact" className="hover:text-cream">Contact</Link>
          </div>
        </div>
      </footer>

      {/* Admin Modal for Adding Items */}
      {adminModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4">
          <div className="w-full max-w-lg glass bg-espresso p-8 rounded-3xl border border-amber/30 shadow-2xl relative">
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-serif text-2xl font-bold">Add New Menu Item</h3>
              <button onClick={() => setAdminModalOpen(false)} className="text-warmgray hover:text-cream text-xl">
                ✕
              </button>
            </div>

            <form onSubmit={handleAddItem} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-warmgray uppercase mb-1">Item Name</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Honey Lavender Cold Brew"
                  value={newName}
                  onChange={(e) => setNewName(e.target.value)}
                  className="w-full glass bg-coffee/50 px-4 py-3 rounded-xl text-sm focus:outline-none focus:border-amber text-cream"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-warmgray uppercase mb-1">Category</label>
                  <select
                    value={newCat}
                    onChange={(e: any) => setNewCat(e.target.value)}
                    className="w-full glass bg-coffee px-4 py-3 rounded-xl text-sm focus:outline-none focus:border-amber text-cream"
                  >
                    <option value="espresso">Espresso & Brews</option>
                    <option value="specialty">Specialty Latte</option>
                    <option value="cold">Cold & Iced</option>
                    <option value="bakery">Bakery</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-warmgray uppercase mb-1">Price ($)</label>
                  <input
                    type="number"
                    step="0.01"
                    required
                    placeholder="6.50"
                    value={newPrice}
                    onChange={(e) => setNewPrice(e.target.value)}
                    className="w-full glass bg-coffee/50 px-4 py-3 rounded-xl text-sm focus:outline-none focus:border-amber text-cream"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-warmgray uppercase mb-1">Description</label>
                <textarea
                  required
                  rows={3}
                  placeholder="Rich notes of..."
                  value={newDesc}
                  onChange={(e) => setNewDesc(e.target.value)}
                  className="w-full glass bg-coffee/50 px-4 py-3 rounded-xl text-sm focus:outline-none focus:border-amber text-cream"
                ></textarea>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-warmgray uppercase mb-1">Badge (Optional)</label>
                  <input
                    type="text"
                    placeholder="e.g. Best Seller"
                    value={newBadge}
                    onChange={(e) => setNewBadge(e.target.value)}
                    className="w-full glass bg-coffee/50 px-4 py-3 rounded-xl text-sm focus:outline-none focus:border-amber text-cream"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-warmgray uppercase mb-1">Image URL (Optional)</label>
                  <input
                    type="url"
                    placeholder="https://..."
                    value={newImage}
                    onChange={(e) => setNewImage(e.target.value)}
                    className="w-full glass bg-coffee/50 px-4 py-3 rounded-xl text-sm focus:outline-none focus:border-amber text-cream"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-gradient-to-r from-amber to-gold text-espresso font-bold shadow-lg shadow-amber/20 hover:opacity-95 transition-all mt-4"
              >
                Save & Add to Menu API
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Cart Drawer */}
      {cartOpen && (
        <div className="fixed inset-0 z-50 flex justify-end bg-black/60 backdrop-blur-sm">
          <div className="w-full max-w-md bg-espresso border-l border-amber/20 p-6 flex flex-col h-full shadow-2xl">
            <div className="flex items-center justify-between pb-6 border-b border-amber/10">
              <h3 className="font-serif text-2xl font-bold">Your Order Cart</h3>
              <button onClick={() => setCartOpen(false)} className="text-warmgray hover:text-cream text-xl p-2">
                ✕
              </button>
            </div>

            <div className="flex-1 overflow-y-auto py-6 space-y-4">
              {cart.length === 0 ? (
                <div className="text-center py-20 text-warmgray">
                  <p className="text-4xl mb-3">🛒</p>
                  <p>Your cart is empty.</p>
                </div>
              ) : (
                cart.map((item, idx) => (
                  <div key={idx} className="glass p-4 rounded-2xl flex items-center justify-between">
                    <div>
                      <h4 className="font-semibold text-sm">{item.name}</h4>
                      <p className="text-amber text-xs">${item.price.toFixed(2)} × {item.qty}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => {
                          setCart((prev) =>
                            prev
                              .map((i) => (i.id === item.id ? { ...i, qty: i.qty - 1 } : i))
                              .filter((i) => i.qty > 0)
                          );
                        }}
                        className="w-7 h-7 rounded-lg glass flex items-center justify-center text-xs"
                      >
                        -
                      </button>
                      <span className="text-sm font-bold w-5 text-center">{item.qty}</span>
                      <button
                        onClick={() => {
                          setCart((prev) =>
                            prev.map((i) => (i.id === item.id ? { ...i, qty: i.qty + 1 } : i))
                          );
                        }}
                        className="w-7 h-7 rounded-lg glass flex items-center justify-center text-xs"
                      >
                        +
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>

            {cart.length > 0 && (
              <div className="pt-6 border-t border-amber/10">
                <div className="flex justify-between items-center mb-6">
                  <span className="text-warmgray">Subtotal</span>
                  <span className="font-serif text-xl font-bold text-amber">${cartTotal.toFixed(2)}</span>
                </div>
                <button
                  onClick={async () => {
                    try {
                      const res = await fetch('/api/orders', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({ items: cart, total: cartTotal })
                      });
                      const data = await res.json();
                      if (data.success) {
                        alert(`Order placed successfully! Order ID: ${data.orderId}`);
                        setCart([]);
                        setCartOpen(false);
                      }
                    } catch (e) {
                      alert('Checkout failed. Please try again.');
                    }
                  }}
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-amber to-gold text-espresso font-bold shadow-lg shadow-amber/20 hover:opacity-95 transition-all text-center"
                >
                  Proceed to Checkout (${cartTotal.toFixed(2)})
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
