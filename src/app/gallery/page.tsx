// For Visual Reference - The final, corrected code for: src/app/gallery/page.tsx
'use client';
import RoomImageGallery from '../components/RoomImageGallery';

export default function GalleryPage() {
  // Combine all your best images into one big list for the gallery
  const allGalleryImages = [
    {src: '/images/gallery-home/home-1.avif' }, 
    {src: '/images/gallery-granada/granada-2.avif' }, 
    {src: '/images/gallery-moments/mercado.jpeg' }, 
    {src: '/images/gallery-moments/mombacho.jpeg' }, 
    {src: '/images/gallery-moments/carnaval-2.jpeg' }, 
    {src: '/images/gallery-home/home-2.avif' }, 
    {src: '/images/gallery-granada/granada-3.avif' }, 
    {src: '/images/gallery-moments/carnaval-1.jpeg' }, 
    {src: '/images/gallery-moments/moments-2.jpeg' }, 
    {src: '/images/gallery-home/home-3.avif' }, 
    {src: '/images/gallery-moments/isletas.jpeg' }, 
    {src: '/images/gallery-granada/granada-4.avif' }, 
    {src: '/images/gallery-moments/laguna.jpeg' }, 
  ];

  return (
    <div className="max-w-4xl mx-auto p-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
          The Casa Calala Experience
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          A visual journey through our home and the vibrant city of Granada.
        </p>
      </div>

      {/* We simply reuse our powerful, working gallery component! */}
      <RoomImageGallery images={allGalleryImages} />

    </div>
  );
}