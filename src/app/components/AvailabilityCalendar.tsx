// For Visual Reference - The complete code for: src/app/components/AvailabilityCalendar.tsx
'use client';

import { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import icsToJson from 'ics-parser';

type Props = {
  airbnbIcalUrl: string;
  bookingIcalUrl: string;
};

// --- THIS IS THE FIX ---
// We define a simple type for the events we expect from the ics file.
type CalendarEvent = {
  startDate: string;
  endDate: string;
  summary?: string; // The summary is optional
};
// --- END OF FIX ---

type BookedEvent = {
  startDate: Date;
  endDate: Date;
};

export default function AvailabilityCalendar(props: Props) {
  const [bookedDates, setBookedDates] = useState<BookedEvent[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchAndSetBookedDates() {
      setIsLoading(true);
      let allEvents: CalendarEvent[] = []; // Use our new type here
      try {
        if (props.airbnbIcalUrl && !props.airbnbIcalUrl.includes('PASTE_YOUR')) {
          const res = await fetch(`/api/calendar?url=${encodeURIComponent(props.airbnbIcalUrl)}`);
          if (res.ok) allEvents = allEvents.concat(icsToJson(await res.text()));
        }
        if (props.bookingIcalUrl && !props.bookingIcalUrl.includes('PASTE_YOUR')) {
          const res = await fetch(`/api/calendar?url=${encodeURIComponent(props.bookingIcalUrl)}`);
          if (res.ok) allEvents = allEvents.concat(icsToJson(await res.text()));
        }

        const processedDates = allEvents.map(event => ({
          startDate: new Date(event.startDate),
          endDate: new Date(event.endDate),
        }));
        setBookedDates(processedDates);

      } catch (error) {
        console.error("Failed to fetch calendar data:", error);
        setBookedDates([]);
      }
      setIsLoading(false);
    }

    fetchAndSetBookedDates();
  }, [props.airbnbIcalUrl, props.bookingIcalUrl]);

  const isDateBooked = (date: Date) => {
    return bookedDates.some(event => 
      date >= event.startDate && date < event.endDate
    );
  };

  const tileDisabled = ({ date, view }: { date: Date, view: string }) => {
    if (view === 'month') {
      return isDateBooked(date);
    }
    return false;
  };

  if (isLoading) {
    return <div className="mt-8">Loading availability...</div>
  }

  return (
    <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Check Availability</h2>
      <div className="flex justify-center">
        <Calendar
          tileDisabled={tileDisabled}
          minDate={new Date()}
        />
      </div>
      <p className="mt-4 text-sm text-center text-gray-500">
        Dates marked in gray are unavailable.
      </p>
    </div>
  );
}