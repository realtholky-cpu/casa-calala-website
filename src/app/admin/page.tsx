// For Visual Reference - The complete code for: src/app/admin/page.tsx
'use client'; // This line is essential because the page is interactive

import { useState, useEffect } from 'react';
import AdminCalendar from '../components/AdminCalendar';

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check if we've already authenticated in this session
    if (sessionStorage.getItem('isAdminAuthenticated') === 'true') {
      setIsAuthenticated(true);
      return;
    }

    // Simple password prompt for authentication
    const password = prompt("Please enter the admin password:");

    // IMPORTANT: Change "casacalala_admin" to your own secret password
    if (password === "casacalala_admin") {
      // If correct, set state and save to session storage
      setIsAuthenticated(true);
      sessionStorage.setItem('isAdminAuthenticated', 'true');
    }
  }, []); // The empty array [] means this runs only once when the page loads

  // If the user is not authenticated, show an access denied message
  if (!isAuthenticated) {
    return (
      <div className="flex items-center justify-center h-screen">
        <h1 className="text-2xl text-red-600 font-bold">Access Denied</h1>
      </div>
    );
  }

  // If the user IS authenticated, show the real admin dashboard
  return (
    <div className="max-w-6xl mx-auto p-8">
      <h1 className="text-3xl font-bold text-gray-800">Admin Dashboard</h1>
      <p className="mt-4 text-gray-600">
        Welcome, Administrator. Here you can manage your bookings.
      </p>
      <div className="mt-8">
        <AdminCalendar />
      </div>
    </div>
  );
}