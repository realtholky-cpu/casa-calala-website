// For Visual Reference - The final, complete code for: src/app/layout.tsx
'use client';

import { useState } from 'react';
// We do not need 'Metadata' here anymore because this is a client component
// import type { Metadata } from "next"; 
import { Inter } from "next/font/google";
import 'react-calendar/dist/Calendar.css';
import "./globals.css";
import Link from "next/link";
import Image from 'next/image';

// --- THIS IS THE FIRST NEW LINE ---
import { Analytics } from '@vercel/analytics/react'; // Import the Analytics component

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <html lang="en">
      {/* It's good practice to add a <head> tag for metadata, though Next.js handles much of this */}
      <head>
        <title>Casa Calala - Guest House in Granada</title>
      </head>
      <body className={inter.className}>
        <header className="bg-white shadow-md sticky top-0 z-50">
          {/* ... Your entire <nav> section is perfect, no changes needed here ... */}
          <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex-shrink-0">
                <Link href="/" className="flex items-center space-x-2">
                  <Image src="/logo2.png" alt="Casa Calala Logo" width={40} height={40} />
                  <span className="font-bold text-xl text-gray-800">Casa Calala</span>
                </Link>
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  <Link href="/rooms" className="text-gray-600 hover:text-yellow-500 px-3 py-2 rounded-md text-sm font-medium">Our Rooms</Link>
                  <Link href="/gallery" className="text-gray-600 hover:text-yellow-500 px-3 py-2 rounded-md text-sm font-medium">Gallery</Link>
                  <Link href="/reviews" className="text-gray-600 hover:text-yellow-500 px-3 py-2 rounded-md text-sm font-medium">Reviews</Link>
                   <Link href="/blog" className="text-gray-600 hover:text-yellow-500 x`px-3 py-2 rounded-md text-sm font-medium">Blog</Link>
                  <Link href="/contact" className="text-gray-600 hover:text-yellow-500 px-3 py-2 rounded-md text-sm font-medium">Contact</Link>
                  <Link href="/experiences" className="bg-yellow-500 text-white hover:bg-yellow-600 px-3 py-2 rounded-md text-sm font-medium">Experiences</Link>
                </div>
              </div>
              <div className="md:hidden flex items-center">
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  type="button"
                  className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:bg-gray-100 focus:outline-none"
                >
                  <span className="sr-only">Open main menu</span>
                  {isMenuOpen ? (
                    <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                  ) : (
                    <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" /></svg>
                  )}
                </button>
              </div>
            </div>
          </nav>
          {isMenuOpen && (
            <div className="md:hidden" id="mobile-menu">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <Link onClick={() => setIsMenuOpen(false)} href="/rooms" className="text-gray-800 hover:bg-yellow-100 block px-3 py-2 rounded-md text-base font-medium">Our Rooms</Link>
                <Link onClick={() => setIsMenuOpen(false)} href="/gallery" className="text-gray-800 hover:bg-yellow-100 block px-3 py-2 rounded-md text-base font-medium">Gallery</Link>
                <Link onClick={() => setIsMenuOpen(false)} href="/reviews" className="text-gray-800 hover:bg-yellow-100 block px-3 py-2 rounded-md text-base font-medium">Reviews</Link>
                <Link onClick={() => setIsMenuOpen(false)} href="/experiences" className="text-gray-800 hover:bg-yellow-100 block px-3 py-2 rounded-md text-base font-medium">Experiences</Link>
                <Link onClick={() => setIsMenuOpen(false)} href="/contact" className="text-gray-800 hover:bg-yellow-100 block px-3 py-2 rounded-md text-base font-medium">Contact</Link>
                <Link onClick={() => setIsMenuOpen(false)} href="/blog" className="text-gray-800 hover:bg-yellow-100 block px-3 py-2 rounded-md text-base font-medium">Blog</Link>
              </div>
            </div>
          )}
        </header>

        <main>{children}</main>

        <footer className="bg-gray-800 text-white mt-12">
          <div className="max-w-6xl mx-auto p-8 text-center">
            <p>© {new Date().getFullYear()} Casa Calala. All Rights Reserved.</p>
            <p className="mt-2">Granada, Nicaragua</p>
          </div>
        </footer>

        {/* --- THIS IS THE SECOND NEW LINE --- */}
        {/* Add the Analytics component just before the closing body tag */}
        <Analytics />
      </body>
    </html>
  );
}