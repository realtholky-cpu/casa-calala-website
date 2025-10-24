// For Visual Reference - Final Code for: src/app/rooms/apartment-3/page.tsx
import RoomImageGallery from '../../components/RoomImageGallery';
import Link from 'next/link';
import AvailabilityCalendar from '../../components/AvailabilityCalendar';

export default function Apartment3Page() {
  const apartment3Images = [
    '/images/apartment-3/ap3-1.avif', 
    '/images/apartment-3/ap3-2.avif',
    '/images/apartment-3/ap3-3.avif',
    '/images/apartment-3/ap3-4.avif',
    '/images/apartment-3/ap3-5.avif',
    '/images/apartment-3/ap3-6.avif',
    '/images/apartment-3/ap3-7.avif',
    '/images/apartment-3/ap3-8.avif',
    '/images/apartment-3/ap3-9.avif'

  ];
  const apartment3_booking_com_link = 'https://www.booking.com/hotel/ni/casa-calala.es.html?label=gen173nr-10CAsoqAFCC2Nhc2EtY2FsYWxhSDNYBGioAYgBAZgBM7gBF8gBDNgBA-gBAfgBAYgCAagCAbgCt8XfxwbAAgHSAiRkOTIzZDMxOS1mMzZlLTRkY2EtODM3NS04YTQ0MWJjZDc1MGTYAgHgAgE&sid=bb1d84d5eb5312a4f136dbfdba828d89&dist=0&keep_landing=1&sb_price_type=total&type=total&';

  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-3xl font-bold text-gray-800">Apartment 3: Comfortable one-bedroom apartment</h1>
      <div className="mt-8">
        <RoomImageGallery images={apartment3Images} />
      </div>
      <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">About this space</h2>
        <p className="text-lg text-gray-700">This comfortable one-bedroom unit is perfect for travelers looking for simplicity, privacy, and great value in the heart of Granada. The apartment includes a private bedroom with bathroom, a compact kitchen/dining area, it's offering all the essentials for a relaxing stay.</p>
      </div>
      <AvailabilityCalendar apartmentId="apartment-3" />
      <div className="mt-8 text-center">
        <Link href={apartment3_booking_com_link} target="_blank" rel="noopener noreferrer" className="inline-block bg-yellow-500 text-white font-bold text-lg px-8 py-4 rounded-lg hover:bg-yellow-600 transition-colors">Book Now on Booking.com</Link>
      </div>
    </div>
  );
}