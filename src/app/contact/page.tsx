// For Visual Reference - Type this into: src/app/contact/page.tsx
export default function ContactPage() {
  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">
        Contact Us
      </h1>

      <div className="bg-white p-8 rounded-lg shadow-md">
        <p className="text-lg text-gray-700 mb-4">
          We would love to hear from you! Whether you have a question about our apartments,
          availability, or special requests, please feel free to reach out.
        </p>

        <div className="mt-6">
          <h2 className="text-xl font-semibold text-gray-800">Email Us</h2>
          <p className="mt-2 text-lg text-yellow-600 hover:underline">
            casacalala@gmail.com {/* Customize your email */}
          </p>
        </div>

        <div className="mt-6">
          <h2 className="text-xl font-semibold text-gray-800">Call Us</h2>
          <p className="mt-2 text-lg text-gray-700">
            +505 8796 8424 (Nicaragua) {/* Customize your phone number */}
          </p>
        </div>

        <div className="mt-6">
          <h2 className="text-xl font-semibold text-gray-800">Our Location</h2>
          <p className="mt-2 text-lg text-gray-700">
            Calle Santa Lucia 123, Granada, Nicaragua {/* Customize your address */}
          </p>
        </div>

      </div>
    </div>
  );
}