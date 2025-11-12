// For Visual Reference - Type this into: src/app/components/InteractivePostSection.tsx
'use client';

import { Star, DollarSign } from 'lucide-react';
import ImageSlideshow from './ImageSlideshow'; // We reuse our existing slideshow component

// A helper component for rendering star ratings
const StarRating = ({ rating }: { rating: number }) => (
  <div className="flex items-center">
    {[...Array(5)].map((_, i) => (
      <Star key={i} className={`h-5 w-5 ${i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} />
    ))}
  </div>
);

// A helper component for rendering price level
const PriceRating = ({ price }: { price: number }) => (
  <div className="flex items-center">
    {[...Array(3)].map((_, i) => (
      <DollarSign key={i} className={`h-5 w-5 ${i < price ? 'text-green-500' : 'text-gray-300'}`} />
    ))}
  </div>
);

// Define the information this component needs
type Props = {
  title: string;
  description: React.ReactNode;
  images: string[];
  rating: number;
  price: number;
  locationName: string;
  mapSrc: string;
};

export default function InteractivePostSection({ title, description, images, rating, price, locationName, mapSrc }: Props) {
  return (
    <div className="py-8 border-b">
      <h3 className="text-3xl font-bold text-gray-800">{title}</h3>
      <div className="flex items-center mt-2 space-x-6">
        {rating > 0 && <StarRating rating={rating} />}
        {price > 0 && <PriceRating price={price} />}
      </div>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left side: Image Slideshow */}
        <div>
          <ImageSlideshow images={images} />
        </div>
        {/* Right side: Description and Map */}
        <div>
          <div className="text-lg text-gray-700 space-y-4">{description}</div>
          <div className="mt-6">
            <p className="font-semibold text-gray-800">Recommended Spot:</p>
            <p className="text-gray-600">{locationName}</p>
          </div>
          <div className="mt-4 aspect-video w-full rounded-lg overflow-hidden shadow-md">
            <iframe
              src={mapSrc}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}