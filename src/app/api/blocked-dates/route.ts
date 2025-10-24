// For Visual Reference - The complete code for: src/app/api/blocked-dates/route.ts
import { NextResponse } from 'next/server';
import { Low } from 'lowdb';
import { JSONFile } from 'lowdb/node';

type Data = {
  blockedDates: { apartmentId: string; date: string }[];
};

const defaultData: Data = { blockedDates: [] };
const adapter = new JSONFile<Data>('db.json');

async function getDb() {
  const db = new Low(adapter, defaultData);
  await db.read();
  return db;
}

export async function GET() {
  try {
    const db = await getDb();
    return NextResponse.json(db.data.blockedDates);
  } catch (error) {
    console.error('[API GET ERROR]', error);
    return NextResponse.json({ message: 'Failed to read database.' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const { apartmentId, date } = await request.json();
    if (!apartmentId || !date) {
      return NextResponse.json({ error: 'Missing apartmentId or date' }, { status: 400 });
    }
    const db = await getDb();
    db.data.blockedDates.push({ apartmentId, date });
    await db.write();
    return NextResponse.json({ success: true, added: { apartmentId, date } });
  } catch (error) {
    console.error('[API POST ERROR]', error);
    return NextResponse.json({ message: 'Failed to write to database.' }, { status: 500 });
  }
}

export async function DELETE(request: Request) {
  try {
    const { apartmentId, date } = await request.json();
    if (!apartmentId || !date) {
      return NextResponse.json({ error: 'Missing apartmentId or date' }, { status: 400 });
    }
    const db = await getDb();
    db.data.blockedDates = db.data.blockedDates.filter(
      (d) => !(d.apartmentId === apartmentId && d.date === date)
    );
    await db.write();
    return NextResponse.json({ success: true, removed: { apartmentId, date } });
  } catch (error) {
    console.error('[API DELETE ERROR]', error);
    return NextResponse.json({ message: 'Failed to write to database.' }, { status: 500 });
  }
}