// For Visual Reference - Final Code for: src/app/rooms/apartment-6/page.tsx
import RoomImageGallery from '../../components/RoomImageGallery';
import Link from 'next/link';
import AvailabilityCalendar from '../../components/AvailabilityCalendar';

export default function Apartment6Page() {
  const apartment6Images = [
    '/images/apartment-6/ap6-1.avif', 
    '/images/apartment-6/ap6-2.avif',
    '/images/apartment-6/ap6-3.avif',
    '/images/apartment-6/ap6-4.avif',
    '/images/apartment-6/ap6-5.avif',
    '/images/apartment-6/ap6-6.avif',
    '/images/apartment-6/ap6-7.avif',
    '/images/apartment-6/ap6-8.avif',
    '/images/apartment-6/ap6-9.avif',
    '/images/apartment-6/ap6-10.avif',
    '/images/apartment-6/ap6-11.avif',
    '/images/apartment-6/ap6-12.avif'
  ];
  const apartment6_booking_com_link = 'https://www.booking.com/hotel/ni/casa-calala.es.html?label=gen173nr-10CAsoqAFCC2Nhc2EtY2FsYWxhSDNYBGioAYgBAZgBM7gBF8gBDNgBA-gBAfgBAYgCAagCAbgCt8XfxwbAAgHSAiRkOTIzZDMxOS1mMzZlLTRkY2EtODM3NS04YTQ0MWJjZDc1MGTYAgHgAgE&sid=bb1d84d5eb5312a4f136dbfdba828d89&dist=0&keep_landing=1&sb_price_type=total&type=total&';

  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-3xl font-bold text-gray-800">Apartment 6: Premium apartment</h1>
      <div className="mt-8">
        <RoomImageGallery images={apartment6Images} />
      </div>
      <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">About this space</h2>
        <p className="text-lg text-gray-700">This bright and airy two-bedroom apartment on the first floor offers everything you need for a relaxing stay in the city. Ideal for families or groups of up to 5 people, it features two comfortable bedrooms, a large fully equipped kitchen, a cozy living area, and a balcony overlooking the courtyard.</p>
      </div>
      <AvailabilityCalendar apartmentId="apartment-6" />
      <div className="mt-8 text-center">
        <Link href={apartment6_booking_com_link} target="_blank" rel="noopener noreferrer" className="inline-block bg-yellow-500 text-white font-bold text-lg px-8 py-4 rounded-lg hover:bg-yellow-600 transition-colors">Book Now on Booking.com</Link>
      </div>
    </div>
  );
}