// For Visual Reference - The complete code for: src/app/components/AvailabilityCalendar.tsx
'use client';

import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
// The 'react-calendar/dist/Calendar.css' is correctly imported in layout.tsx

type Props = {
  apartmentId: string;
};

export default function AvailabilityCalendar({ apartmentId }: Props) {
  const [blockedDates, setBlockedDates] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchBlockedDates() {
      setIsLoading(true);
      try {
        const response = await fetch('/api/blocked-dates');
        if (response.ok) {
          const data = await response.json();
          const apartmentBlockedDates = data
            .filter((d: any) => d.apartmentId === apartmentId)
            .map((d: any) => d.date);
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

  // This function now just disables the tile, the styling is handled by globals.css
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
            value={null} // Ensure no date is pre-selected
          />
        </div>
      )}
      <p className="mt-4 text-sm text-center text-gray-500">
        Dates shaded grey are unavailable.
      </p>
    </div>
  );
}