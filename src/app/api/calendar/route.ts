// For Visual Reference - Type this into: src/app/api/calendar/route.ts
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  // Get the 'url' we want to fetch from the query parameters
  const { searchParams } = new URL(request.url);
  const icalUrl = searchParams.get('url');

  if (!icalUrl) {
    return NextResponse.json({ error: 'iCal URL is required' }, { status: 400 });
  }

  try {
    const response = await fetch(icalUrl, {
      next: { revalidate: 3600 } // Cache the response for 1 hour
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch iCal feed: ${response.statusText}`);
    }

    const icsText = await response.text();
    // We send the raw text back to our component
    return new Response(icsText, {
      headers: { 'Content-Type': 'text/plain' },
    });

  } catch (error) {
    console.error('[CALENDAR API] Fetch Error:', error);
    return NextResponse.json({ error: 'Failed to fetch calendar data' }, { status: 500 });
  }
}