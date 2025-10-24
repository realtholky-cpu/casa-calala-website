// For Visual Reference - The complete and final code for: src/app/components/AdminCalendar.tsx
'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Calendar from 'react-calendar';

type BlockedDate = {
  apartmentId: string;
  date: string;
};

export default function AdminCalendar() {
  const [selectedApartment, setSelectedApartment] = useState('apartment-1');
  const [blockedDates, setBlockedDates] = useState<BlockedDate[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [activeStartDate, setActiveStartDate] = useState<Date>(new Date());

  const fetchBlockedDates = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await fetch('/api/blocked-dates');
      if (response.ok) {
        const data: BlockedDate[] = await response.json();
        setBlockedDates(data);
      } else {
        console.error("API responded with an error");
        setBlockedDates([]);
      }
    } catch (error) {
      console.error("Failed to fetch data:", error);
      setBlockedDates([]);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchBlockedDates();
  }, [fetchBlockedDates]);

  const onDateClick = async (date: Date) => {
    const dateString = date.toISOString().split('T')[0];
    const isCurrentlyBlocked = blockedDates.some(
      (d) => d.apartmentId === selectedApartment && d.date === dateString
    );
    setActiveStartDate(date);
    if (isCurrentlyBlocked) {
      await fetch('/api/blocked-dates', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ apartmentId: selectedApartment, date: dateString }),
      });
      setBlockedDates(prev => prev.filter(d => !(d.apartmentId === selectedApartment && d.date === dateString)));
    } else {
      await fetch('/api/blocked-dates', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ apartmentId: selectedApartment, date: dateString }),
      });
      setBlockedDates(prev => [...prev, { apartmentId: selectedApartment, date: dateString }]);
    }
  };

  // === THIS IS THE NEW BRUTE-FORCE STYLING LOGIC ===
  const tileContent = ({ date, view }: { date: Date, view: string }) => {
    if (view === 'month') {
      const dateString = date.toISOString().split('T')[0];
      const isBlocked = blockedDates.some(
        (d) => d.apartmentId === selectedApartment && d.date === dateString
      );

      if (isBlocked) {
        // If the date is blocked, we inject a div with direct styles
        return (
          <div style={{ 
            backgroundColor: '#ef4444', // red-500
            color: 'white',
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            {date.getDate()}
          </div>
        );
      }
    }
    // For all other dates, return null (the calendar will use its default)
    return null;
  };
  // === END OF NEW LOGIC ===

  const apartments = ['apartment-1', 'apartment-2', 'apartment-3', 'apartment-4', 'apartment-6'];

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Manage Availability</h2>

      <div className="mb-4">
        <label htmlFor="apartment-select" className="block text-sm font-medium text-gray-700">Select Apartment:</label>
        <select
          id="apartment-select"
          value={selectedApartment}
          onChange={(e) => setSelectedApartment(e.target.value)}
          className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm rounded-md"
        >
          {apartments.map(id => <option key={id} value={id}>{id.replace('-', ' ')}</option>)}
        </select>
      </div>

      {isLoading ? (
        <p>Loading calendar...</p>
      ) : (
        <div className="flex justify-center">
          <Calendar
            onClickDay={onDateClick}
            // We are REMOVING tileClassName and USING tileContent instead
            tileContent={tileContent}
            minDate={new Date()}
            activeStartDate={activeStartDate}
            onActiveStartDateChange={({ activeStartDate }) => setActiveStartDate(activeStartDate || new Date())}
            selectRange={false}
          />
        </div>
      )}
      <p className="mt-4 text-sm text-gray-500">Click a date to block or unblock it. Changes are saved automatically.</p>
    </div>
  );
}