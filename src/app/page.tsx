// For Visual Reference - The complete code for: src/app/page.tsx
import Image from 'next/image';
import Link from 'next/link';
import ImageSlideshow from './components/ImageSlideshow';
import heroImage from './hero-image.jpg';

export default function HomePage() {
  const slideshowImages = [
    '/images/apartment-1.jpg',
    '/images/apartment-2.jpg',
    '/images/apartment-3.jpg',
    '/images/apartment-4.jpg',
    '/images/apartment-6.jpg',
  ];

  return (
    <main>
      <section className="relative h-screen flex items-center justify-center">
        <Image
          src={heroImage}
          alt="A beautiful view from Casa Calala"
          fill
          className="object-cover -z-10"
          placeholder="blur"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-40" />
        <div className="relative text-center text-white p-4">
          <div className="mb-4">
            <Image
              src="/logo.svg"
              alt="Casa Calala Logo"
              width={120}
              height={120}
              className="mx-auto"
            />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            Your Granada Getaway
          </h1>
          <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto">
            Experience the heart of Nicaragua from the comfort of your own private apartment.
          </p>
          <Link
            href="/rooms"
            className="mt-8 inline-block bg-yellow-500 text-white font-bold px-8 py-3 rounded-lg text-lg hover:bg-yellow-600 transition-colors"
          >
            Explore Our Rooms
          </Link>
        </div>
      </section>
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
              More Than a Stay, It&apos;s an Experience
            </h2>
            {/* --- THIS IS THE FIX --- */}
            <p className="mt-6 text-lg text-gray-600">
              Casa Calala was born from a passion for the vibrant culture and stunning beauty of Granada. We&apos;re not just a guesthouse; we are your local hosts, dedicated to making your visit unforgettable. Each of our apartments is designed to be your home away from home, blending modern comfort with authentic Nicaraguan charm.
            </p>
            {/* --- END OF FIX --- */}
            <p className="mt-4 text-lg text-gray-600">
              From the moment you arrive, our goal is to help you connect with the real Granada.
            </p>
          </div>
          <div>
            <ImageSlideshow images={slideshowImages} />
          </div>
        </div>
      </section>
      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Why Guests Love Casa Calala</h2>
          </div>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
            <div className="p-4">
              <div className="flex justify-center items-center h-16 w-16 bg-yellow-100 rounded-full mx-auto">
                <svg className="h-8 w-8 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
              </div>
              <h3 className="mt-4 text-xl font-semibold">Prime Location</h3>
              <p className="mt-2 text-gray-600">Steps away from the famous Calle La Calzada, cathedrals, and the best local restaurants.</p>
            </div>
            <div className="p-4">
              <div className="flex justify-center items-center h-16 w-16 bg-yellow-100 rounded-full mx-auto">
                <svg className="h-8 w-8 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
              </div>
              <h3 className="mt-4 text-xl font-semibold">Your Home in Granada</h3>
              <p className="mt-2 text-gray-600">Fully-equipped apartments with kitchens, high-speed WiFi, and all the amenities you need to relax.</p>
            </div>
            <div className="p-4">
              <div className="flex justify-center items-center h-16 w-16 bg-yellow-100 rounded-full mx-auto">
                <svg className="h-8 w-8 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.5l1.318-1.182a4.5 4.5 0 116.364 6.364L12 21.5l-7.682-7.682a4.5 4.5 0 010-6.364z" /></svg>
              </div>
              <h3 className="mt-4 text-xl font-semibold">Hosted with Care</h3>
              <p className="mt-2 text-gray-600">We are passionate hosts dedicated to providing exceptional hospitality and local insights.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
