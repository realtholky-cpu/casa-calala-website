// For Visual Reference - The complete code for: src/app/components/RoomImageGallery.tsx
'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';

// === THIS IS THE CORRECTED SECTION ===
// We import the main function on one line...
import useEmblaCarousel from 'embla-carousel-react';
// ...and we import the TYPE on a separate line. This is the fix.
import type { UseEmblaCarouselType } from 'embla-carousel-react';
// === END OF CORRECTED SECTION ===

type Props = {
  images: string[];
};

export default function RoomImageGallery({ images }: Props) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [emblaMainRef, emblaMainApi] = useEmblaCarousel({ loop: true });
  const [emblaThumbsRef, emblaThumbsApi] = useEmblaCarousel({
    containScroll: 'keepSnaps',
    dragFree: true,
  });

  const onThumbClick = useCallback(
    (index: number) => {
      if (!emblaMainApi || !emblaThumbsApi) return;
      emblaMainApi.scrollTo(index);
    },
    [emblaMainApi, emblaThumbsApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaMainApi || !emblaThumbsApi) return;
    setSelectedIndex(emblaMainApi.selectedScrollSnap());
    emblaThumbsApi.scrollTo(emblaMainApi.selectedScrollSnap());
  }, [emblaMainApi, emblaThumbsApi, setSelectedIndex]);

  useEffect(() => {
    if (!emblaMainApi) return;
    onSelect();
    emblaMainApi.on('select', onSelect);
    emblaMainApi.on('reInit', onSelect);
  }, [emblaMainApi, onSelect]);

  const scrollPrev = useCallback(() => emblaMainApi && emblaMainApi.scrollPrev(), [emblaMainApi]);
  const scrollNext = useCallback(() => emblaMainApi && emblaMainApi.scrollNext(), [emblaMainApi]);

  return (
    <div className="space-y-4">
      {/* Main Image Viewer */}
      <div className="overflow-hidden relative rounded-lg shadow-lg" ref={emblaMainRef}>
        <div className="flex">
          {images.map((src, index) => (
            <div className="relative flex-none w-full aspect-video" key={index}>
              <Image src={src} alt={`Room image ${index + 1}`} fill className="object-cover" />
            </div>
          ))}
        </div>
        {/* Prev/Next Buttons */}
        <button className="absolute top-1/2 left-4 -translate-y-1/2 bg-white/70 p-2 rounded-full shadow-md hover:bg-white" onClick={scrollPrev}>
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg>
        </button>
        <button className="absolute top-1/2 right-4 -translate-y-1/2 bg-white/70 p-2 rounded-full shadow-md hover:bg-white" onClick={scrollNext}>
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
        </button>
      </div>

      {/* Thumbnail Navigation */}
      <div className="overflow-hidden" ref={emblaThumbsRef}>
        <div className="flex space-x-3">
          {images.map((src, index) => (
            <button onClick={() => onThumbClick(index)} key={index} className="flex-none w-24 h-16 relative rounded-md overflow-hidden">
              <Image
                src={src}
                alt={`Room thumbnail ${index + 1}`}
                fill
                className={`object-cover transition-opacity duration-200 ${index === selectedIndex ? 'opacity-100' : 'opacity-50 hover:opacity-75'}`}
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}