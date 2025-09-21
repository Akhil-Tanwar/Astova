import { NextRequest, NextResponse } from 'next/server';

export const runtime = 'nodejs';            // ensure Node runtime
export const dynamic = 'force-dynamic';     // no static caching

const VALID_SIGNS = [
  'aries','taurus','gemini','cancer','leo','virgo',
  'libra','scorpio','sagittarius','capricorn','aquarius','pisces'
];
const VALID_DAYS = ['yesterday','today','tomorrow'];

// Simple GET to verify the route is deployed
export async function GET() {
  return NextResponse.json({ ok: true, hint: 'POST {sign, day} to this endpoint' });
}

export async function POST(req: NextRequest) {
  try {
    const { sign, day } = await req.json();

    if (!VALID_SIGNS.includes(sign) || !VALID_DAYS.includes(day)) {
      return NextResponse.json({ error: 'Invalid input' }, { status: 400 });
    }

    const url = `https://aztro.sameerkumar.website/?sign=${encodeURIComponent(sign)}&day=${encodeURIComponent(day)}`;

    const r = await fetch(url, {
      method: 'POST',
      // some providers want a UA; harmless everywhere
      headers: { 'User-Agent': 'Astova/1.0' },
      cache: 'no-store',
    });

    if (!r.ok) {
      const body = await r.text();
      return NextResponse.json(
        { error: 'Provider error', status: r.status, body: body.slice(0, 200) },
        { status: 502 }
      );
    }

    const data = await r.json();
    return NextResponse.json(data);
  } catch (e: any) {
    return NextResponse.json({ error: e.message || 'Server error' }, { status: 500 });
  }
}
