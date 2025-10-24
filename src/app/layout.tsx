// For Visual Reference - The complete code for: src/app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import 'react-calendar/dist/Calendar.css'; // This MUST be here
import "./globals.css"; // And this MUST be after it
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Casa Calala - Guest House in Granada",
  description: "Your cozy and charming getaway in the heart of Granada.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="bg-white shadow-md sticky top-0 z-10">
          <nav className="max-w-6xl mx-auto flex justify-between items-center p-4">
            <h1 className="text-2xl font-bold text-gray-800">
              <Link href="/">Casa Calala</Link>
            </h1>
            <ul className="flex space-x-6 text-gray-600 font-medium">
              <li><Link href="/" className="hover:text-yellow-500">Home</Link></li>
              <li><Link href="/rooms" className="hover:text-yellow-500">Our Rooms</Link></li>
              <li><Link href="/gallery" className="hover:text-yellow-500">Gallery</Link></li>
              <li><Link href="/reviews" className="hover:text-yellow-500">Reviews</Link></li>
              <li><Link href="/booking" className="hover:text-yellow-500">Booking</Link></li>
              <li><Link href="/contact" className="hover:text-yellow-500">Contact</Link></li>
            </ul>
          </nav>
        </header>

        <main>{children}</main>

        <footer className="bg-gray-800 text-white mt-12">
          <div className="max-w-6xl mx-auto p-8 text-center">
            <p>© {new Date().getFullYear()} Casa Calala. All Rights Reserved.</p>
            <p className="mt-2">Granada, Nicaragua</p>
          </div>
        </footer>
      </body>
    </html>
  );
}