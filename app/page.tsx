'use client';

// Client component handling hero and scroll animations

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Home() {
  const [cartOpen, setCartOpen] = useState(false);
  const [cart, setCart] = useState<any[]>([]);
  const [toastMessage, setToastMessage] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    // Scroll animations
    gsap.utils.toArray<HTMLElement>('.scroll-reveal').forEach((elem) => {
      gsap.fromTo(
        elem,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: elem,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      );
    });
  }, []);

  const addToCart = (item: any) => {
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

  const cartTotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <div className="min-h-screen bg-espresso text-cream flex flex-col">
      {/* Toast Notification */}
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
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber to-gold flex items-center justify-center text-espresso font-bold text-xl shadow-lg shadow-amber/20 group-hover:scale-105 transition-transform">
              ★
            </div>
            <span className="font-serif text-2xl font-bold tracking-wide">Star Coffee</span>
          </Link>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            <Link href="/" className="text-amber hover:text-gold transition-colors">Home</Link>
            <Link href="/menu" className="text-warmgray hover:text-cream transition-colors">Menu</Link>
            <Link href="/contact" className="text-warmgray hover:text-cream transition-colors">Contact</Link>
          </nav>

          <div className="flex items-center gap-4">
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

        {/* Mobile Nav */}
        {mobileMenuOpen && (
          <div className="md:hidden glass border-t border-amber/10 px-6 py-4 flex flex-col gap-3">
            <Link href="/" className="text-amber font-medium">Home</Link>
            <Link href="/menu" className="text-warmgray hover:text-cream">Menu</Link>
            <Link href="/contact" className="text-warmgray hover:text-cream">Contact</Link>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-44 md:pb-32 hero-glow flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-15 pointer-events-none">
          <div className="steam-particle w-24 h-24 top-1/4 left-1/3 animate-pulse"></div>
          <div className="steam-particle w-32 h-32 top-1/3 right-1/4"></div>
        </div>

        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
          <div className="inline-flex items-center gap-2 glass px-4 py-1.5 rounded-full text-xs text-amber font-semibold mb-6 tracking-wider uppercase">
            <span>✨ Artisanal Roasters & Craft Brews</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight mb-8 leading-tight">
            Where Every Cup Tells a <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber to-gold">Celestial Story</span>
          </h1>
          <p className="text-warmgray text-lg sm:text-xl max-w-2xl mx-auto mb-10 font-light leading-relaxed">
            Ethically sourced beans roasted in small batches, hand-crafted specialty beverages, and freshly baked pastries served in an atmosphere of warmth and perfection.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/menu"
              className="w-full sm:w-auto bg-gradient-to-r from-amber to-gold text-espresso font-bold px-8 py-4 rounded-full shadow-lg shadow-amber/30 hover:opacity-95 transition-all text-center"
            >
              Explore Full Menu →
            </Link>
            <Link
              href="/contact"
              className="w-full sm:w-auto glass px-8 py-4 rounded-full text-cream font-semibold hover:bg-amber/10 transition-all text-center"
            >
              Visit Roastery
            </Link>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 border-y border-amber/10 bg-coffee/30 scroll-reveal">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <p className="font-serif text-4xl font-bold text-amber mb-2">100%</p>
            <p className="text-warmgray text-sm">Ethically Sourced Arabica</p>
          </div>
          <div>
            <p className="font-serif text-4xl font-bold text-amber mb-2">18h</p>
            <p className="text-warmgray text-sm">Cold Brew Steep Time</p>
          </div>
          <div>
            <p className="font-serif text-4xl font-bold text-amber mb-2">21+</p>
            <p className="text-warmgray text-sm">Artisanal Drinks & Pastries</p>
          </div>
          <div>
            <p className="font-serif text-4xl font-bold text-amber mb-2">4.9★</p>
            <p className="text-warmgray text-sm">Customer Rating</p>
          </div>
        </div>
      </section>

      {/* Brand Pillars */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16 scroll-reveal">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold mb-4">The Star Coffee Philosophy</h2>
          <p className="text-warmgray">We obsess over every detail so your daily ritual becomes a moment of pure bliss.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="glass p-8 rounded-3xl scroll-reveal">
            <div className="w-12 h-12 rounded-2xl bg-amber/10 border border-amber/20 flex items-center justify-center text-2xl mb-6 text-amber">
              🌱
            </div>
            <h3 className="font-serif text-xl font-bold mb-3">Direct Trade & Organic</h3>
            <p className="text-warmgray text-sm leading-relaxed">
              We partner directly with family-owned farms across Ethiopia, Colombia, and Guatemala, ensuring fair wages and sustainable farming practices.
            </p>
          </div>

          <div className="glass p-8 rounded-3xl scroll-reveal">
            <div className="w-12 h-12 rounded-2xl bg-amber/10 border border-amber/20 flex items-center justify-center text-2xl mb-6 text-amber">
              🔥
            </div>
            <h3 className="font-serif text-xl font-bold mb-3">Small-Batch Roasted</h3>
            <p className="text-warmgray text-sm leading-relaxed">
              Every bean is roasted in-house using vintage drum roasters calibrated to highlight unique flavor profiles, acidity, and aroma.
            </p>
          </div>

          <div className="glass p-8 rounded-3xl scroll-reveal">
            <div className="w-12 h-12 rounded-2xl bg-amber/10 border border-amber/20 flex items-center justify-center text-2xl mb-6 text-amber">
              ☕
            </div>
            <h3 className="font-serif text-xl font-bold mb-3">Master Baristas</h3>
            <p className="text-warmgray text-sm leading-relaxed">
              Our award-winning baristas undergo rigorous training in extraction science, milk micro-texturing, and sensory evaluation.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Drinks Preview */}
      <section className="py-20 bg-coffee/20 border-t border-amber/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 scroll-reveal">
            <div>
              <p className="text-amber text-xs font-semibold tracking-wider uppercase mb-2">Handcrafted Perfection</p>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold">Featured Creations</h2>
            </div>
            <Link href="/menu" className="mt-4 md:mt-0 text-amber hover:text-gold font-medium text-sm inline-flex items-center gap-1">
              View all 21 items →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Signature Star Latte',
                price: '$6.50',
                desc: 'Double shot, velvety microfoam, organic wildflower honey & cinnamon.',
                badge: 'Best Seller',
                img: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=800&auto=format&fit=crop'
              },
              {
                name: 'Ceremonial Matcha Latte',
                price: '$6.75',
                desc: 'Uji ceremonial grade green tea whisked smooth with oat milk & vanilla.',
                badge: 'Organic',
                img: 'https://images.unsplash.com/photo-1536256263959-770b48d82b08?q=80&w=800&auto=format&fit=crop'
              },
              {
                name: 'Velvet Cold Brew',
                price: '$5.25',
                desc: 'Steeped 18 hours in cold spring water with deep dark chocolate notes.',
                badge: 'Smooth',
                img: 'https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?q=80&w=800&auto=format&fit=crop'
              }
            ].map((drink, idx) => (
              <div key={idx} className="glass rounded-3xl overflow-hidden scroll-reveal group">
                <div className="h-60 overflow-hidden relative">
                  <img src={drink.img} alt={drink.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  {drink.badge && (
                    <span className="absolute top-4 right-4 bg-espresso/80 backdrop-blur-md text-amber text-xs font-semibold px-3 py-1 rounded-full border border-amber/20">
                      {drink.badge}
                    </span>
                  )}
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-serif text-xl font-bold">{drink.name}</h3>
                    <span className="text-amber font-bold">{drink.price}</span>
                  </div>
                  <p className="text-warmgray text-sm mb-6">{drink.desc}</p>
                  <button
                    onClick={() => addToCart({ id: idx + 100, name: drink.name, price: parseFloat(drink.price.replace('$', '')) })}
                    className="w-full py-3 rounded-xl bg-amber/10 border border-amber/30 text-amber font-semibold text-sm hover:bg-amber hover:text-espresso transition-all"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

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

      {/* Cart Slide-over Drawer */}
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
