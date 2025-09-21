import { NextRequest, NextResponse } from 'next/server';

// Free sign-based daily horoscope (no API key). Provider requires POST.
export async function POST(req: NextRequest) {
  try {
    const { sign, day } = await req.json();

    const validSigns = ['aries','taurus','gemini','cancer','leo','virgo',
      'libra','scorpio','sagittarius','capricorn','aquarius','pisces'];
    const validDays = ['yesterday','today','tomorrow'];
    if (!validSigns.includes(sign) || !validDays.includes(day)) {
      return NextResponse.json({ error: 'Invalid input' }, { status: 400 });
    }

    const url = `https://aztro.sameerkumar.website/?sign=${encodeURIComponent(sign)}&day=${encodeURIComponent(day)}`;
    const r = await fetch(url, { method: 'POST' });
    if (!r.ok) throw new Error('Provider error');

    const data = await r.json();
    return NextResponse.json(data);
  } catch (e: any) {
    return NextResponse.json({ error: e.message || 'Server error' }, { status: 500 });
  }
}
