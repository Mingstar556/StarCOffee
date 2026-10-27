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
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&display=swap"
        />
      </head>
      <body className="bg-espresso text-cream font-sans antialiased overflow-x-hidden selection:bg-amber selection:text-espresso">
        {children}
      </body>
    </html>
  );
}
