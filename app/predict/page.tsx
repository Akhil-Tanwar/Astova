'use client';
import { useState } from 'react';

export default function PredictPage() {
  const [sign, setSign] = useState('aries');
  const [day, setDay] = useState('today');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true); setError(null); setResult(null);
    try {
      const r = await fetch('/api/daily', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ sign, day })
      });
      if (!r.ok) throw new Error('Failed to get prediction');
      setResult(await r.json());
    } catch (err: any) { setError(err.message || 'Something went wrong'); }
    finally { setLoading(false); }
  }

  return (
    <main className="max-w-xl mx-auto p-6 space-y-6">
      <h1 className="text-2xl font-bold">Get Your Daily Prediction</h1>
      <form onSubmit={onSubmit} className="space-y-4 border p-4 rounded-xl">
        <div className="grid grid-cols-2 gap-4">
          <label className="flex flex-col gap-1">
            <span>Zodiac Sign</span>
            <select className="border rounded p-2" value={sign}
              onChange={(e) => setSign(e.target.value)}>
              {['aries','taurus','gemini','cancer','leo','virgo',
                'libra','scorpio','sagittarius','capricorn','aquarius','pisces']
               .map(s => <option key={s} value={s}>{s}</option>)}
            </select>
          </label>
          <label className="flex flex-col gap-1">
            <span>Day</span>
            <select className="border rounded p-2" value={day}
              onChange={(e) => setDay(e.target.value)}>
              <option value="yesterday">yesterday</option>
              <option value="today">today</option>
              <option value="tomorrow">tomorrow</option>
            </select>
          </label>
        </div>
        <button disabled={loading} className="bg-black text-white px-4 py-2 rounded-lg">
          {loading ? 'Thinking…' : 'Get Prediction'}
        </button>
      </form>

      {error && <p className="text-red-600">{error}</p>}
      {result && (
        <div className="border rounded-xl p-4 space-y-2">
          <h2 className="font-semibold text-lg">Prediction</h2>
          <p>{result.description}</p>
          <div className="text-sm text-gray-600">
            <div><strong>Current Date:</strong> {result.current_date}</div>
            <div><strong>Compatibility:</strong> {result.compatibility}</div>
            <div><strong>Mood:</strong> {result.mood}</div>
            <div><strong>Color:</strong> {result.color}</div>
          </div>
        </div>
      )}
    </main>
  );
}
