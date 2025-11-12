// For Visual Reference - Type this into: src/app/rooms/page.tsx
import Link from 'next/link'; // Import the Link component

export default function RoomsPage() {
  return (
    <div className="max-w-6xl mx-auto p-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">
        Our Apartments
      </h1>

      <div className="space-y-8">
        {/* Link to Apartment 1 */}
        <Link
          href="/rooms/apartment-1" // Direct link to the static page
          className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
        >
          <div>
            <h2 className="text-2xl font-semibold text-yellow-600">Apartment 1: Modern one-bedroom apartment</h2>
            <p className="mt-2 text-gray-700">This charming one-bedroom apartment offers the perfect balance of city living and personal comfort.</p> {/* Customize description */}
          </div>
        </Link>

        {/* Link to Apartment 2 */}
        <Link
          href="/rooms/apartment-2"
          className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
        >
          <div>
            <h2 className="text-2xl font-semibold text-yellow-600">Apartment 2: Modern one-bedroom apartment</h2>
            <p className="mt-2 text-gray-700">Welcome to your private one-bedroom apartment in the heart of Granada.</p> {/* Customize description */}
          </div>
        </Link>

        {/* Link to Apartment 3 */}
        <Link
          href="/rooms/apartment-3"
          className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
        >
          <div>
            <h2 className="text-2xl font-semibold text-yellow-600">Apartment 3: Comfortable one-bedroom apartment</h2>
            <p className="mt-2 text-gray-700">This comfortable one-bedroom unit is perfect for travelers looking for simplicity, privacy, and great value in the heart of Granada.</p> {/* Customize description */}
          </div>
        </Link>

        {/* Link to Apartment 4 */}
        <Link
          href="/rooms/apartment-4"
          className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
        >
          <div>
            <h2 className="text-2xl font-semibold text-yellow-600">Apartment 4: Comfortable one-bedroom apartment</h2>
            <p className="mt-2 text-gray-700">This inviting one-bedroom apartment comfortably accommodates up to 4 guests, making it ideal for small families, friends, or couples traveling together.</p> {/* Customize description */}
          </div>
        </Link>

        {/* Link to Apartment 6 */}
        <Link
          href="/rooms/apartment-6"
          className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
        >
          <div>
            <h2 className="text-2xl font-semibold text-yellow-600">Apartment 6: Premium apartment</h2>
            <p className="mt-2 text-gray-700">This bright and airy two-bedroom apartment on the first floor offers everything you need for a relaxing stay in the city.</p> {/* Customize description */}
          </div>
        </Link>

                {/* Link to Casa Colonial */}
        <Link
          href="/rooms/casacolonial"
          className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
        >
          <div>
            <h2 className="text-2xl font-semibold text-yellow-600">Casa Colonial: Modern Colonial House</h2>
            <p className="mt-2 text-gray-700">Welcome to your private two-bedroom house with a plunge pool.</p> {/* Customize description */}
          </div>
        </Link>

      </div>
    </div>
  );
}