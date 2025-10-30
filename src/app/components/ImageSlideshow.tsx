// For Visual Reference - The complete code for: src/app/components/ImageSlideshow.tsx
'use client';

import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';

// The 'Props' type defines what information this component needs.
// In this case, it's a list (an array) of image path strings.
type Props = {
  images: string[];
};

export default function ImageSlideshow({ images }: Props) {
  // We initialize the carousel here. The { loop: true } makes it infinite.
  // The Autoplay plugin makes it change slides automatically.
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 4000 })]);

  return (
    // This is the main container for the carousel.
    <div className="overflow-hidden rounded-lg shadow-xl" ref={emblaRef}>
      <div className="flex">
        {/* We use .map() to create a slide for each image in the list */}
        {images.map((src, index) => (
          // Each slide needs a unique 'key' so React can keep track of it.
          <div className="relative flex-none w-full aspect-video" key={index}>
            <Image
              src={src}
              alt={`Slideshow image ${index + 1}`}
              fill
              className="object-cover"
              // The 'sizes' prop helps the browser load the best image size
              sizes="(max-width: 768px) 100vw, 50vw"
              // The 'priority' prop tells Next.js to load the first image faster
              priority={index === 0}
            />
          </div>
        ))}
      </div>
    </div>
  );
}