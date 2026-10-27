import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Star Coffee — Artisanal Roasters & Brews',
  description: 'Artisanal coffee roasters, hand-crafted specialty drinks, and fresh bakery items.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="bg-espresso text-cream font-sans antialiased overflow-x-hidden selection:bg-amber selection:text-espresso">
        {children}
      </body>
    </html>
  );
}
