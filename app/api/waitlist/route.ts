import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { email } = await request.json();
    if (typeof email !== 'string' || !email.includes('@')) {
      return NextResponse.json({ error: 'Invalid email' }, { status: 400 });
    }

    // TODO: Persist to your database, Google Sheet, Email list, etc.
    // For now, just echo success.
    return NextResponse.json({ ok: true });
  } catch (error) {
    return NextResponse.json({ error: 'Bad request' }, { status: 400 });
  }
}

