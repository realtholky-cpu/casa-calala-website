// For Visual Reference - Use this pattern for all room pages
import RoomImageGallery from '../../components/RoomImageGallery';
import Link from 'next/link';
import AvailabilityCalendar from '../../components/AvailabilityCalendar';

export default function Apartment2Page() {
  const apartment2Images = ['/images/apartment-2/ap2-1.avif', '/images/apartment-2/ap2-2.avif', '/images/apartment-2/ap2-3.avif', '/images/apartment-2/ap2-4.avif', '/images/apartment-2/ap2-7.avif', '/images/apartment-2/ap2-8.avif', '/images/apartment-2/ap2-9.avif'];
  const apartment2_booking_com_link = 'https://www.booking.com/hotel/ni/casa-calala.es.html?label=gen173nr-10CAsoqAFCC2Nhc2EtY2FsYWxhSDNYBGioAYgBAZgBM7gBF8gBDNgBA-gBAfgBAYgCAagCAbgCt8XfxwbAAgHSAiRkOTIzZDMxOS1mMzZlLTRkY2EtODM3NS04YTQ0MWJjZDc1MGTYAgHgAgE&sid=bb1d84d5eb5312a4f136dbfdba828d89&dist=0&keep_landing=1&sb_price_type=total&type=total&';

  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-3xl font-bold text-gray-800">Apartment 2: Modern one-bedroom apartment</h1>

      {/* THIS IS THE CRITICAL PART - USE THE GALLERY COMPONENT */}
      <div className="mt-8">
        <RoomImageGallery images={apartment2Images} />
      </div>

      <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">About this space</h2>
        <p className="text-lg text-gray-700">Welcome to your private one-bedroom apartment in the heart of Granada.This cozy space features a comfortable bedroom with an en-suite bathroom, and a fully equipped private kitchen and dining area — perfect for travelers who enjoy the freedom of cooking their own meals.</p>
      </div>

      {/* The calendar now only needs the apartment's ID */}
      <AvailabilityCalendar apartmentId="apartment-2" />

      <div className="mt-8 text-center">
        <Link href={apartment2_booking_com_link} target="_blank" rel="noopener noreferrer" className="inline-block bg-yellow-500 text-white font-bold text-lg px-8 py-4 rounded-lg hover:bg-yellow-600 transition-colors">Book Now on Booking.com</Link>
      </div>
    </div>
  );
}