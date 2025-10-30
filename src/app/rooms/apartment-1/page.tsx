// For Visual Reference - Type this into: src/app/rooms/apartment-1/page.tsx
import RoomImageGallery from '../../components/RoomImageGallery';
import Link from 'next/link';
import AvailabilityCalendar from '../../components/AvailabilityCalendar';

export default function Apartment1Page() {
  const apartment1Images = [
    '/images/apartment-1/main.avif',    // Make sure these files exist
    '/images/apartment-1/bathroom.avif',
    '/images/apartment-1/balcony.avif',
    '/images/apartment-1/ap1-2.avif',
    '/images/apartment-1/ap1-3.avif',
    '/images/apartment-1/ap1-4.avif',
    '/images/apartment-1/ap1-5.avif',
    '/images/apartment-1/ap1-6.avif',

  ];
  const apartment1_booking_com_link = 'https://www.booking.com/hotel/ni/casa-calala.es.html?label=gen173nr-10CAsoqAFCC2Nhc2EtY2FsYWxhSDNYBGioAYgBAZgBM7gBF8gBDNgBA-gBAfgBAYgCAagCAbgCt8XfxwbAAgHSAiRkOTIzZDMxOS1mMzZlLTRkY2EtODM3NS04YTQ0MWJjZDc1MGTYAgHgAgE&sid=bb1d84d5eb5312a4f136dbfdba828d89&dist=0&keep_landing=1&sb_price_type=total&type=total&';

  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-3xl font-bold text-gray-800">Apartment 1: Modern one-bedroom apartment</h1>
      <div className="mt-8">
        <RoomImageGallery images={apartment1Images} />
      </div>
      <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">About this space</h2>
        <p className="text-lg text-gray-700">This charming one-bedroom apartment offers the perfect balance of city living and personal comfort. Enjoy a spacious bedroom with a private bathroom, plus a separate, fully equipped kitchen and dining area. Ideal for travelers who love privacy and independence.</p>
      </div>

      {/* The calendar now only needs the apartment's ID */}
      <AvailabilityCalendar apartmentId="apartment-1" />

      <div className="mt-8 text-center">
        <Link href={apartment1_booking_com_link} target="_blank" rel="noopener noreferrer" className="inline-block bg-yellow-500 text-white font-bold text-lg px-8 py-4 rounded-lg hover:bg-yellow-600 transition-colors">Book Now on Booking.com</Link>
      </div>
    </div>
  );
}