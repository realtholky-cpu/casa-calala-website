// For Visual Reference - The complete code for: src/app/reviews/page.tsx
'use client';

import Image from 'next/image';
import { Rating } from 'react-simple-star-rating';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

export default function ReviewsPage() {
  const reviews = [
    {
      quote: "I stayed here for more than a week and felt very comfortable. Carlos is very friendly and attentive, the communication was great and I also felt well taken care of in the area. Every 2–3 days my room was cleaned, the bed linen changed, the trash can emptied and the bathroom including toilet cleaned. I liked this service very much. I thank you from the bottom of my heart for everything.",
      author: "Melanie",
      source: "airbnb",
      rating: 5,
      avatar: '/images/avatars/jane-d.jpg',
    },
    {
      quote: "Cute and cozy Apartment with everything you need such as comfortable beds, aircon, Hot water, a well Equipped kitchen and a super helpful host. The old town and Churches are all in walking.",
      author: "Magnus",
      source: "booking",
      rating: 5,
      avatar: '/images/avatars/carlos-g.jpg',
    },
    {
      quote: "Casa calala was our home away from home. Its perfectly decorated, nice bathroom and large kitchen and private patio. Without ac it can be a little hot sometimes. Marlies and Carlos very well understand what is true hospitality and will do everything to make your stay beyond perfect. We will return everytime! Highly recommended.",
      author: "Fromanna",
      source: "google",
      rating: 5,
      avatar: '/images/avatars/Fromana.jpg',
    },
    {
      quote: "Just like the photos, if we return to Nicaragua we will rent it again, the place is cozy and has what is required.",
      author: "Catiana",
      source: "airbnb",
      rating: 5,
      avatar: '/images/avatars/avatar-2.jpg',
    },
    {
      quote: "Great apartment. Very Spacious. Big fridge full equipped kitchen. Close to the main square and walking street, Where there's bars and restaurants. The place is very clean and safe. Carlos is a great host. He booked our trips which were amazing. He also booked our onward travel. Carlos was always available to answer any questions.",
      author: "Wendy",
      source: "booking",
      rating: 5,
      avatar: '/images/avatars/wendy.jpg',
    },
    {
      quote: "Great place with a good location. It was a pleasant stay with excellent hospitality. Marlies and Carlos responded to us via Airbnb within minutes. Excellent facilities for a good price. Would definitely recommend.",
      author: "Joeri van Peer",
      source: "google",
      rating: 5,
      avatar: '/images/avatars/joeri.jpg',
    },
  ];

  const sourceLogos = {
    airbnb: { src: '/images/airbnb-logo.svg', alt: 'Airbnb Logo' },
    booking: { src: '/images/booking-logo.svg', alt: 'Booking.com Logo' },
    google: { src: '/images/google-logo.svg', alt: 'Google Logo' },
  };

  const [emblaRef] = useEmblaCarousel({ loop: true, align: 'start' }, [Autoplay({ delay: 5000 })]);

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto p-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
            Straight from Our Guests
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            We're proud of our 5-star reputation. Here's what our guests have to say.
          </p>
        </div>

        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {reviews.map((review, index) => (
              <div className="flex-none w-full md:w-1/2 lg:w-1/3 p-4" key={index}>
                <div className="bg-white h-full p-6 rounded-xl shadow-lg flex flex-col hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">

                  {/* --- THIS IS THE NEW, RESTRUCTURED TOP SECTION --- */}
                  <div className="flex items-center justify-between mb-4">
                    {/* Left side: Stars */}
                    <Rating initialValue={review.rating} readonly size={24} fillColor="#facc15" emptyColor="#e5e7eb" />
                    {/* Right side: Reviewer Avatar */}
                    <div className="relative w-24 h-24 rounded-full overflow-hidden">
                      <Image
                        src={review.avatar}
                        alt={`Avatar of ${review.author}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  {/* --- END OF NEW SECTION --- */}

                  <div className="flex-grow">
                    <p className="text-lg italic text-gray-700">"{review.quote}"</p>
                  </div>

                  <div className="mt-6 border-t pt-4 flex items-center justify-between">
                    <div>
                      <p className="font-semibold text-gray-900">{review.author}</p>
                      <p className="text-sm text-gray-500">Verified Guest</p>
                    </div>
                    <div className="w-16 h-16 relative">
                      <Image
                        src={sourceLogos[review.source as keyof typeof sourceLogos].src}
                        alt={sourceLogos[review.source as keyof typeof sourceLogos].alt}
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}