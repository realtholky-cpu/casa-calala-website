import RoomImageGallery from '../../components/RoomImageGallery';
import Link from 'next/link';
import AvailabilityCalendar from '../../components/AvailabilityCalendar';

export default function CasacolonialPage() {
  const apartment6Images = [
    '/images/casacolonial/casacolonial-1.png', 
    '/images/casacolonial/casacolonial-2.png',
    '/images/casacolonial/casacolonial-3.png',
    '/images/casacolonial/casacolonial-4.png',
    '/images/casacolonial/casacolonial-5.png',
    '/images/casacolonial/casacolonial-6.png',
    '/images/casacolonial/casacolonial-7.png',
    '/images/casacolonial/casacolonial-8.png',
    '/images/casacolonial/casacolonial-9.png',

  ];
  const apartment6_booking_com_link = 'https://www.booking.com/hotel/ni/lovely-new-build-colonial-house-with-plunge-pool.html?aid=356980&label=gog235jc-10CAsoqAFCMGxvdmVseS1uZXctYnVpbGQtY29sb25pYWwtaG91c2Utd2l0aC1wbHVuZ2UtcG9vbEgKWANoqAGIAQGYATO4ARfIAQzYAQPoAQH4AQGIAgGoAgG4AvnA08gGwAIB0gIkZWJmODcwNTYtMzU5Yy00NGVmLTg5ZGQtM2U0NGRmODUyZjAz2AIB4AIB&sid=bb1d84d5eb5312a4f136dbfdba828d89&dest_id=-1111886&dest_type=city&dist=0&group_adults=2&group_children=0&hapos=1&hpos=1&no_rooms=1&req_adults=2&req_children=0&room1=A%2CA&sb_price_type=total&sr_order=popularity&srepoch=1762975873&srpvid=8df8893d3fe90422&type=total&ucfs=1&';

  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-3xl font-bold text-gray-800">Casa Colonial</h1>
      <div className="mt-8">
        <RoomImageGallery images={apartment6Images} />
      </div>
      <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">About this space</h2>
        <p className="text-lg text-gray-700">Experience the charm of Granada in Colonial House, a beautifully restored retreat that blends classic Nicaraguan architecture with modern comfort. Guests can unwind in the indoor plunge pool, a tranquil spot to cool off and relax after a day of exploring the city.</p>
        <p className="text-lg text-gray-700">The home features in-room air-conditioning, free WiFi, a kitchenette, and a comfortable lounge, offering everything you need for a peaceful stay. For added convenience, shuttle service, car hire, and private off-site parking are available. Whether you&apos;re visiting for adventure, history, or pure relaxation, Colonial House offers a serene and authentic Granada experience.</p>
      </div>
      <AvailabilityCalendar apartmentId="casacolonial" />
      <div className="mt-8 text-center">
        <Link href={apartment6_booking_com_link} target="_blank" rel="noopener noreferrer" className="inline-block bg-yellow-500 text-white font-bold text-lg px-8 py-4 rounded-lg hover:bg-yellow-600 transition-colors">Book Now on Booking.com</Link>
      </div>
    </div>
  );
}