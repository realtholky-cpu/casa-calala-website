// For Visual Reference - Final Code for: src/app/rooms/apartment-4/page.tsx
import RoomImageGallery from '../../components/RoomImageGallery';
import Link from 'next/link';
import AvailabilityCalendar from '../../components/AvailabilityCalendar';

export default function Apartment4Page() {
  const apartment4Images = [
    
    {src: '/images/apartment-4/ap4-1.avif' }, 
    {src: '/images/apartment-4/ap4-2.avif' },
    {src: '/images/apartment-4/ap4-3.avif' },
    {src: '/images/apartment-4/ap4-4.avif' },
    {src: '/images/apartment-4/ap4-5.avif' },
    {src: '/images/apartment-4/ap4-6.avif' },
    {src: '/images/apartment-4/ap4-7.avif' },
    {src: '/images/apartment-4/ap4-8.avif' },
    {src: '/images/apartment-4/ap4-9.avif' },
  ];
  const apartment4_booking_com_link = 'https://www.booking.com/hotel/ni/casa-calala.es.html?label=gen173nr-10CAsoqAFCC2Nhc2EtY2FsYWxhSDNYBGioAYgBAZgBM7gBF8gBDNgBA-gBAfgBAYgCAagCAbgCt8XfxwbAAgHSAiRkOTIzZDMxOS1mMzZlLTRkY2EtODM3NS04YTQ0MWJjZDc1MGTYAgHgAgE&sid=bb1d84d5eb5312a4f136dbfdba828d89&dist=0&keep_landing=1&sb_price_type=total&type=total&';

  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-3xl font-bold text-gray-800">Apartment 4: Comfortable one-bedroom apartment</h1>
      <div className="mt-8">
        <RoomImageGallery images={apartment4Images} />
      </div>
      <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">About this space</h2>
        <p className="text-lg text-gray-700">This inviting one-bedroom apartment comfortably accommodates up to 4 guests, making it ideal for small families, friends, or couples traveling together. The bedroom features a queen-size bed and a bunk bed, an en-suite bathroom, and a fully equipped kitchen.</p>
      </div>
      <AvailabilityCalendar apartmentId="apartment-4" />
      <div className="mt-8 text-center">
        <Link href={apartment4_booking_com_link} target="_blank" rel="noopener noreferrer" className="inline-block bg-yellow-500 text-white font-bold text-lg px-8 py-4 rounded-lg hover:bg-yellow-600 transition-colors">Book Now on Booking.com</Link>
      </div>
    </div>
  );
}