// For Visual Reference - The complete and final code for: src/app/gallery/page.tsx
'use client';

import Image from 'next/image';
import React, { useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

// Import the lightbox component and its CSS
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

export default function GalleryPage() {
  // Combine all your best images into one big list for the carousel
  const allImages = [
    { src: '/images/gallery-home/home-1.avif' },
    { src: '/images/gallery-granada/granada-2.avif' },
    { src: '/images/gallery-moments/mercado.jpeg' },
    { src: '/images/gallery-moments/mombacho.jpeg' },
    { src: '/images/gallery-moments/carnaval-2.jpeg' },
    { src: '/images/gallery-home/home-2.avif' },
    { src: '/images/gallery-granada/granada-3.avif' },
    { src: '/images/gallery-moments/carnaval-1.jpeg' },
    { src: '/images/gallery-moments/moments-2.jpeg' },
    { src: '/images/gallery-home/home-3.avif' },
    { src: '/images/gallery-moments/isletas.jpeg' },
    { src: '/images/gallery-granada/granada-4.avif' },
    { src: '/images/gallery-moments/laguna.jpeg' },
  ];

  // Setup the carousel exactly like the Tours page
  const [emblaRef] = useEmblaCarousel({ loop: true, align: 'start' }, [Autoplay({ delay: 4000 })]);

  // State to manage the lightbox
  const [open, setOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto p-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
            The Casa Calala Experience
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            A visual journey through our home and the vibrant city of Granada.
          </p>
        </div>

        {/* The Carousel - Identical in structure to your working Tours page */}
        <div className="overflow-hidden rounded-lg" ref={emblaRef}>
          <div className="flex">
            {allImages.map((image, index) => (
              // Each slide takes up full width on mobile, 1/2 on medium, 1/3 on large screens
              <div className="flex-none w-full md:w-1/2 lg:w-1/3 p-3" key={index}>
                <button
                  type="button"
                  className="block w-full h-full"
                  onClick={() => {
                    setSelectedIndex(index);
                    setOpen(true);
                  }}
                >
                  {/* We use aspect-square to make the images square and elegant */}
                  <div className="relative aspect-square shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
                    <Image
                      src={image.src}
                      alt={`Gallery image ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                </button>
              </div>
            ))}
          </div>
        </div>

        <p className="text-center mt-6 text-sm text-gray-500">
          Click any image to view it in full-screen.
        </p>
      </div>

      {/* The Lightbox component for full-screen images */}
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={allImages}
        index={selectedIndex}
      />
    </div>
  );
}