// For Visual Reference - The final, complete code for: src/app/components/AvailabilityCalendar.tsx
'use client';

import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';

// Define the shape of the props this component accepts
type Props = {
  apartmentId: string;
};

// --- THIS IS THE FIX ---
// We define the shape of the objects we expect back from our API.
type BlockedDateFromAPI = {
  apartmentId: string;
  date: string;
};
// --- END OF THE FIX ---

export default function AvailabilityCalendar({ apartmentId }: Props) {
  const [blockedDates, setBlockedDates] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchBlockedDates() {
      setIsLoading(true);
      try {
        const response = await fetch('/api/blocked-dates');
        if (response.ok) {
          // Tell TypeScript to expect an array of our defined type
          const data: BlockedDateFromAPI[] = await response.json();

          // This logic now works without any 'any' types
          const apartmentBlockedDates = data
            .filter((d) => d.apartmentId === apartmentId)
            .map((d) => d.date);
          setBlockedDates(apartmentBlockedDates);
        } else {
          console.error("API responded with an error");
        }
      } catch (error) {
        console.error("Failed to fetch blocked dates:", error);
      }
      setIsLoading(false);
    }
    fetchBlockedDates();
  }, [apartmentId]);

  const tileDisabled = ({ date, view }: { date: Date, view: string }) => {
    if (view === 'month') {
      const dateString = date.toISOString().split('T')[0];
      return blockedDates.includes(dateString);
    }
    return false;
  };

  return (
    <div className="mt-8 bg-gray-50 p-6 rounded-lg shadow-inner">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Availability</h2>
      {isLoading ? (
        <p>Loading calendar...</p>
      ) : (
        <div className="flex justify-center">
          <Calendar 
            tileDisabled={tileDisabled} 
            minDate={new Date()} 
            value={null}
          />
        </div>
      )}
      <p className="mt-4 text-sm text-center text-gray-500">
        Dates marked in red are unavailable.
      </p>
    </div>
  );
}