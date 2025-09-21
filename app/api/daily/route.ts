import { NextRequest, NextResponse } from 'next/server';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

const SIGNS = ['aries','taurus','gemini','cancer','leo','virgo','libra','scorpio','sagittarius','capricorn','aquarius','pisces'];
const DAYS = ['yesterday','today','tomorrow'];

export async function GET() {
  return NextResponse.json({ ok: true, hint: 'POST {sign, day} here' });
}

export async function POST(req: NextRequest) {
  try {
    const { sign, day } = await req.json();
    if (!SIGNS.includes(sign) || !DAYS.includes(day)) {
      return NextResponse.json({ error: 'Invalid input' }, { status: 400 });
    }
    const r = await fetch(
      `https://aztro.sameerkumar.website/?sign=${encodeURIComponent(sign)}&day=${encodeURIComponent(day)}`,
      { method: 'POST', headers: { 'User-Agent': 'Astova/1.0' }, cache: 'no-store' }
    );
    if (!r.ok) return NextResponse.json({ error: 'Provider error', status: r.status }, { status: 502 });
    return NextResponse.json(await r.json());
  } catch (e: any) {
    return NextResponse.json({ error: e.message || 'Server error' }, { status: 500 });
  }
}
