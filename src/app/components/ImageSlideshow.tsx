// For Visual Reference - The complete code for: src/app/components/ImageSlideshow.tsx
'use client';

import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay'; // Import the autoplay plugin
import Image from 'next/image';

type Props = {
  images: string[];
};

export default function ImageSlideshow({ images }: Props) {
  // Add the Autoplay plugin to the useEmblaCarousel hook
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 2000 })]); // 2000ms = 2 seconds

  return (
    <div className="overflow-hidden rounded-lg shadow-xl" ref={emblaRef}>
      <div className="flex">
        {images.map((src) => (
          <div className="relative flex-none w-full aspect-video" key={src}>
            <Image
              src={src}
              alt="A beautiful photo of one of our apartments"
              fill
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}