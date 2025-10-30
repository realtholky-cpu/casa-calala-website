// For Visual Reference - The complete code for: src/app/components/RoomImageGallery.tsx
'use client';

import React, { useState, useEffect, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Image from 'next/image';

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

  const onThumbClick = useCallback((index: number) => {
    if (!emblaMainApi || !emblaThumbsApi) return;
    emblaMainApi.scrollTo(index);
  }, [emblaMainApi, emblaThumbsApi]);

  const onSelect = useCallback(() => {
    if (!emblaMainApi || !emblaThumbsApi) return;
    setSelectedIndex(emblaMainApi.selectedScrollSnap());
    emblaThumbsApi.scrollTo(emblaMainApi.selectedScrollSnap());
  }, [emblaMainApi, emblaThumbsApi]);

  useEffect(() => {
    if (!emblaMainApi) return;
    onSelect();
    emblaMainApi.on('select', onSelect);
    emblaMainApi.on('reInit', onSelect);
  }, [emblaMainApi, onSelect]);

  const scrollPrev = useCallback(() => emblaMainApi?.scrollPrev(), [emblaMainApi]);
  const scrollNext = useCallback(() => emblaMainApi?.scrollNext(), [emblaMainApi]);

  if (!images || images.length === 0) {
    return <div className="text-center p-4">No images available.</div>;
  }

  return (
    <div className="space-y-4">
      <div className="overflow-hidden relative rounded-lg shadow-lg" ref={emblaMainRef}>
        <div className="flex">
          {images.map((src, index) => (
            <div className="relative flex-none w-full aspect-video" key={index}>
              <Image
                src={src}
                alt={`Room image ${index + 1}`}
                fill
                className="object-cover"
                priority={index === 0}
                sizes="100vw"
              />
            </div>
          ))}
        </div>
        <button aria-label="Previous image" className="absolute top-1/2 left-4 -translate-y-1/2 bg-white/70 p-2 rounded-full shadow-md hover:bg-white z-10" onClick={scrollPrev}>
          <svg className="h-6 w-6 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg>
        </button>
        <button aria-label="Next image" className="absolute top-1/2 right-4 -translate-y-1/2 bg-white/70 p-2 rounded-full shadow-md hover:bg-white z-10" onClick={scrollNext}>
          <svg className="h-6 w-6 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
        </button>
      </div>

      <div className="overflow-hidden" ref={emblaThumbsRef}>
        <div className="flex -mx-2">
          {images.map((src, index) => (
            <div className="flex-none w-1/4 md:w-1/5 px-2" key={index}>
              <button onClick={() => onThumbClick(index)} className="block w-full aspect-video relative rounded-md overflow-hidden">
                <Image
                  src={src}
                  alt={`Room thumbnail ${index + 1}`}
                  fill
                  className={`object-cover transition-opacity duration-200 ${index === selectedIndex ? 'opacity-100 ring-2 ring-yellow-500' : 'opacity-60 hover:opacity-100'}`}
                  sizes="15vw"
                />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}