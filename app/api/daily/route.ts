import { NextRequest, NextResponse } from 'next/server';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

const SIGNS = ['aries','taurus','gemini','cancer','leo','virgo','libra','scorpio','sagittarius','capricorn','aquarius','pisces'];
const DAYS  = ['yesterday','today','tomorrow'];

// also works in browser: /api/daily?sign=virgo&day=today
export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const sign = searchParams.get('sign');
  const day  = searchParams.get('day');
  if (!sign || !day) return NextResponse.json({ ok: true, hint: 'POST {sign, day} or GET ?sign=&day=' });

  return await handle(sign, day);
}

export async function POST(req: NextRequest) {
  const { sign, day } = await req.json();
  if (!SIGNS.includes(sign) || !DAYS.includes(day)) {
    return NextResponse.json({ error: 'Invalid input' }, { status: 400 });
  }
  return await handle(sign, day);
}

async function handle(sign: string, day: string) {
  try {
    const r = await fetch(
      `https://aztro.sameerkumar.website/?sign=${encodeURIComponent(sign)}&day=${encodeURIComponent(day)}`,
      { method: 'POST', headers: { 'User-Agent': 'Astova/1.0' }, cache: 'no-store' }
    );
    if (r.ok) return NextResponse.json(await r.json());

    // graceful fallback so your page still shows something
    return NextResponse.json({
      description: `Today brings a small course-correction for ${sign}. Keep things simple and stick to routines. A short walk and hydration will help. Avoid over-committing.`,
      current_date: new Date().toISOString().slice(0,10),
      compatibility: 'leo',
      mood: 'balanced',
      color: 'indigo'
    });
  } catch {
    // offline/blocked fallback
    return NextResponse.json({
      description: `Quick guidance for ${sign}: focus on one important task, be patient with people, and finish what you start. Small wins > big plans.`,
      current_date: new Date().toISOString().slice(0,10),
      compatibility: 'gemini',
      mood: 'calm',
      color: 'purple'
    });
  }
}
