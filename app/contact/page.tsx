'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function ContactPage() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 5000);
  };

  return (
    <div className="min-h-screen bg-espresso text-cream flex flex-col">
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
            <Link href="/menu" className="text-warmgray hover:text-cream transition-colors">Menu</Link>
            <Link href="/contact" className="text-amber font-semibold">Contact</Link>
          </nav>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden glass p-2.5 rounded-full text-warmgray hover:text-cream"
          >
            ☰
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden glass border-t border-amber/10 px-6 py-4 flex flex-col gap-3">
            <Link href="/" className="text-warmgray hover:text-cream">Home</Link>
            <Link href="/menu" className="text-warmgray hover:text-cream">Menu</Link>
            <Link href="/contact" className="text-amber font-semibold">Contact</Link>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-1 pt-32 pb-24 max-w-7xl mx-auto px-6 w-full">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-amber text-xs font-semibold tracking-wider uppercase mb-2">Get in Touch</p>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold mb-4">Visit Our Roastery</h1>
          <p className="text-warmgray text-sm sm:text-base">
            Have questions about our beans, catering, or wholesale partnerships? We would love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Roastery Info & Map */}
          <div className="space-y-8">
            <div className="glass p-8 rounded-3xl space-y-6">
              <h3 className="font-serif text-2xl font-bold">Star Coffee Roastery & Café</h3>
              <div className="space-y-4 text-warmgray text-sm">
                <div className="flex items-start gap-4">
                  <span className="text-amber text-lg">📍</span>
                  <div>
                    <p className="font-semibold text-cream">Main Flagship Location</p>
                    <p>742 Evergreen Terrace, Suite 400</p>
                    <p>Seattle, WA 98101</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <span className="text-amber text-lg">🕒</span>
                  <div>
                    <p className="font-semibold text-cream">Operating Hours</p>
                    <p>Monday – Friday: 6:00 AM – 7:00 PM</p>
                    <p>Saturday – Sunday: 7:00 AM – 8:00 PM</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <span className="text-amber text-lg">✉️</span>
                  <div>
                    <p className="font-semibold text-cream">Direct Contact</p>
                    <p>roastery@starcoffee.com</p>
                    <p>+1 (555) 382-9481</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Stylized Dark SVG Map */}
            <div className="glass p-4 rounded-3xl overflow-hidden h-72 relative flex items-center justify-center">
              <div className="absolute inset-0 bg-coffee/80 flex flex-col items-center justify-center text-center p-6">
                <div className="w-12 h-12 rounded-full bg-amber/20 border border-amber/40 flex items-center justify-center text-amber text-xl mb-3 animate-bounce">
                  ★
                </div>
                <h4 className="font-serif font-bold text-lg mb-1">Seattle Flagship Roastery</h4>
                <p className="text-warmgray text-xs mb-4">Stop by for a complimentary coffee cupping session every Saturday at 10 AM.</p>
                <span className="inline-block px-4 py-2 rounded-full glass text-xs text-amber font-semibold border-amber/30">
                  Open in Google Maps →
                </span>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="glass p-8 sm:p-10 rounded-3xl">
            <h3 className="font-serif text-2xl font-bold mb-6">Send Us a Message</h3>

            {formSubmitted ? (
              <div className="glass bg-amber/10 p-6 rounded-2xl text-center border-amber/30">
                <p className="text-3xl mb-2">✨</p>
                <h4 className="font-bold text-amber mb-1">Message Received!</h4>
                <p className="text-warmgray text-sm">Thank you for reaching out. Our team will get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-xs font-semibold text-warmgray uppercase mb-2">Your Name</label>
                  <input
                    type="text"
                    required
                    placeholder="Jane Doe"
                    className="w-full glass bg-coffee/50 px-4 py-3.5 rounded-xl text-sm focus:outline-none focus:border-amber text-cream"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-warmgray uppercase mb-2">Email Address</label>
                  <input
                    type="email"
                    required
                    placeholder="jane@example.com"
                    className="w-full glass bg-coffee/50 px-4 py-3.5 rounded-xl text-sm focus:outline-none focus:border-amber text-cream"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-warmgray uppercase mb-2">Subject</label>
                  <select
                    className="w-full glass bg-coffee px-4 py-3.5 rounded-xl text-sm focus:outline-none focus:border-amber text-cream"
                  >
                    <option value="general">General Inquiry</option>
                    <option value="wholesale">Wholesale Partnership</option>
                    <option value="catering">Event Catering</option>
                    <option value="feedback">Feedback & Suggestions</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-warmgray uppercase mb-2">Message</label>
                  <textarea
                    required
                    rows={4}
                    placeholder="How can we help you?"
                    className="w-full glass bg-coffee/50 px-4 py-3.5 rounded-xl text-sm focus:outline-none focus:border-amber text-cream"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-amber to-gold text-espresso font-bold shadow-lg shadow-amber/20 hover:opacity-95 transition-all text-center"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
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
    </div>
  );
}
