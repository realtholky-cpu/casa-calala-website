// For Visual Reference - The complete code for: src/app/blog/page.tsx
'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Star, DollarSign } from 'lucide-react';

// This is our complete "database" for the blog post summaries
const blogPosts = [
  {
    slug: 'food-guide-granada',
    title: "A Food Lover's Guide to Granada",
    category: 'Cuisine',
    excerpt: "Discover the vibrant flavors of Granada, from the street-side vigorón to the rich baho...",
    image: '/images/blog/food-guide.png', // You will need to add these images to public/images/blog/
    rating: 5,
    price: 1,
  },
  {
    slug: 'best-restaurants-granada-2025',
    title: "The 5 Best Restaurants in Granada (2025 Edition)",
    category: 'Dining',
    excerpt: "From authentic Nicaraguan steak to fresh lake fish, we've compiled our must-visit list of the best dining experiences...",
    image: '/images/blog/home-5.avif',
    rating: 5,
    price: 3,
  },
  {
    slug: 'day-trips-from-granada',
    title: "The 5 Best Day Trips from Granada",
    category: 'Adventure',
    excerpt: "From volcanic craters to serene islands, we break down the top 5 must-see destinations just a short trip away...",
    image: '/images/blog/day-trips.jpeg',
    rating: 5,
    price: 2,
  },
  {
    slug: 'is-granada-safe',
    title: "Is Granada Safe for Solo Travelers?",
    category: 'Travel Tips',
    excerpt: "As residents of Granada, we share our honest perspective and practical tips for a safe and enjoyable journey...",
    image: '/images/blog/granada-1.avif',
    rating: 0,
    price: 0,
  },
  {
    slug: 'our-story-casa-calala',
    title: "Our Story: The Passion Behind the Fruit",
    category: 'Casa Calala',
    excerpt: "Learn why the calala fruit inspired our journey and how we built our dream guesthouse in the heart of Granada...",
    image: '/images/blog/our-story.jpeg',
    rating: 0,
    price: 0,
  },
];

// Helper component for star ratings
const StarRating = ({ rating }: { rating: number }) => (
  <div className="flex items-center">
    {[...Array(5)].map((_, i) => (
      <Star key={i} className={`h-5 w-5 ${i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} />
    ))}
  </div>
);

// Helper component for price level
const PriceRating = ({ price }: { price: number }) => (
  <div className="flex items-center">
    {[...Array(3)].map((_, i) => (
      <DollarSign key={i} className={`h-5 w-5 ${i < price ? 'text-green-500' : 'text-gray-300'}`} />
    ))}
  </div>
);

export default function BlogPage() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 tracking-tighter">
            The Granada Journal
          </h1>
          <p className="mt-4 text-xl text-gray-500 max-w-2xl mx-auto">
            Our Top Choices & Local Insights for {currentYear}. Curated for our guests.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <Link 
              key={post.slug} 
              href={`/blog/${post.slug}`}
              // The first and second posts take up more space on large screens
              className={`group block rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 
                ${index === 0 ? 'lg:col-span-2' : ''}
                ${index === 1 ? 'lg:col-span-1' : ''}
              `}
            >
              <div className="relative">
                <div className="w-full aspect-video">
                  <Image
                    src={post.image}
                    alt={`Image for ${post.title}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                </div>
                <div className="absolute bottom-0 left-0 p-6">
                  <span className="text-sm font-semibold text-white bg-yellow-500 px-2 py-1 rounded-full">{post.category}</span>
                  <h2 className="mt-2 text-2xl lg:text-3xl font-bold text-white tracking-tight">
                    {post.title}
                  </h2>
                  <div className="flex items-center mt-2 space-x-4">
                    {post.rating > 0 && <StarRating rating={post.rating} />}
                    {post.price > 0 && <PriceRating price={post.price} />}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}