// For Visual Reference - The complete code for: src/app/booking/page.tsx
'use client';

import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

// Import the lightbox component and its CSS
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

export default function BookingPage() {
  // Your list of tour images
  const tourImages = [
    { src: '/images/tours/tour-1.jpg' },
    { src: '/images/tours/tour-2.jpg' },
    { src: '/images/tours/tour-3.jpg' },
    { src: '/images/tours/tour-4.jpg' },
    { src: '/images/tours/tour-6.jpg' },
    { src: '/images/tours/tour-7.jpg' },
    { src: '/images/tours/tour-8.jpg' },
    { src: '/images/tours/tour-9.jpg' },
    { src: '/images/tours/tour-10.jpg' },
    { src: '/images/tours/tour-11.jpg' },
    { src: '/images/tours/tour-12.jpg' },
    { src: '/images/tours/tour-13.jpg' }
  ];

  // Setup the carousel for the tours
  const [emblaRef] = useEmblaCarousel({ loop: true, align: 'start' }, [Autoplay({ delay: 5000 })]);

  // State to manage the lightbox
  const [open, setOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  // !!! REPLACE THIS with the general link to your Booking.com profile page !!!
  const bookingComProfileLink = 'https://www.booking.com/hotel/ni/casa-calala.es.html?label=gen173nr-10CAsoqAFCC2Nhc2EtY2FsYWxhSDNYBGioAYgBAZgBM7gBF8gBDNgBA-gBAfgBAYgCAagCAbgCt8XfxwbAAgHSAiRkOTIzZDMxOS1mMzZlLTRkY2EtODM3NS04YTQ0MWJjZDc1MGTYAgHgAgE&sid=bb1d84d5eb5312a4f136dbfdba828d89&dist=0&keep_landing=1&sb_price_type=total&type=total&';

  // !!! REPLACE THIS with your email address !!!
  const tourBookingEmail = 'casacalala@gmail.com';
  // We format it for a 'mailto' link
  const mailtoLink = `mailto:${tourBookingEmail}?subject=Tour Inquiry from Casa Calala Website`;

  return (
    <div className="max-w-6xl mx-auto p-8">

      {/* === BOOK YOUR STAY SECTION === */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
          Ready for Your Adventure?
        </h1>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          You can view all our apartment listings and book instantly through our official Booking.com page.
          We guarantee the best rates and direct communication when you book with us.
        </p>
        <div className="mt-8">
          <Link 
            href={bookingComProfileLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-yellow-500 text-white font-bold text-xl px-12 py-4 rounded-lg hover:bg-yellow-600 transition-colors duration-300 shadow-lg"
          >
            Book Your Stay
          </Link>
        </div>
      </div>

      {/* === OUR TOURS SECTION (Updated Wording) === */}
      <div className="mt-16 pt-12 border-t">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Exclusive Local Experiences
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            As our guest, you have access to curated local tours. From volcanic treks to serene lake cruises,
            let us arrange an unforgettable experience for you. All tours pick you up directly from our doorstep.
          </p>
        </div>

        {/* The Tour Image Carousel */}
        <div className="overflow-hidden rounded-lg" ref={emblaRef}>
          <div className="flex">
            {tourImages.map((image, index) => (
              <div className="flex-none w-full md:w-1/2 lg:w-1/3 p-3" key={index}>
                <button
                  type="button"
                  className="block w-full h-full"
                  onClick={() => {
                    setSelectedIndex(index);
                    setOpen(true);
                  }}
                >
                  <div className="relative aspect-[3/4] h-96 shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
                    <Image
                      src={image.src}
                      alt={`Local tour image ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* The New "Book a Tour" Button */}
        <div className="mt-12 text-center">
          <Link 
            href={mailtoLink}
            className="inline-block bg-green-600 text-white font-bold text-lg px-8 py-3 rounded-lg hover:bg-green-700 transition-colors duration-300"
          >
            Inquire About a Tour
          </Link>
          <p className="text-center mt-4 text-sm text-gray-500">
            Click an image to view full-screen. Contact us to book your adventure!
          </p>
        </div>
      </div>

      {/* The Lightbox component for full-screen images */}
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={tourImages}
        index={selectedIndex}
      />

    </div>
  );
}