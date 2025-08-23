'use client';

import { useState } from 'react';
import { signFromDate } from '../utils/zodiac';

export default function HoroscopePopup({ onClose }) {
  const [date, setDate] = useState('');
  const [gender, setGender] = useState('ذكر');
  const [zodiac, setZodiac] = useState('');
  const [loading, setLoading] = useState(false);
  const [forecast, setForecast] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!date) return;

    const z = signFromDate(new Date(date));
    setZodiac(z);

    setLoading(true);
    try {
      const res = await fetch('https://aztro.sameerkumar.website', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: `sign=${z.toLowerCase()}&day=today`,
      });
      const data = await res.json();
      setForecast({
        today: data.description,
        compatibility: data.compatibility,
        mood: data.mood,
        color: data.color,
        lucky_number: data.lucky_number,
      });
    } catch (err) {
      console.error('Failed to fetch horoscope:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 backdrop-blur-sm">
      <div className="bg-gray-900 border-2 border-[#00FFFF] p-8 rounded-xl shadow-2xl max-w-md w-full animate-fadeIn text-white">
        <h2 className="text-2xl text-neonBlue font-bold mb-6">Welcome, Seeker</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-neonPurple mb-2">Date of Birth</label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
              className="w-full p-3 bg-black border border-neonBlue text-neonBlue rounded focus:outline-none focus:ring-2 focus:ring-neonBlue"
            />
          </div>

          <div>
            <label className="block text-neonPurple mb-2">Gender</label>
            <select
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              className="w-full p-3 bg-black border border-neonPink text-neonPink rounded"
            >
              <option value="ذكر">ذكر</option>
              <option value="أنثى">أنثى</option>
            </select>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 bg-gradient-to-r from-[#00FFFF] to-[#7A00FF] text-black font-bold rounded hover:scale-105 transition-transform disabled:opacity-50"
          >
            {loading ? 'Calculating Stars...' : 'Reveal Your Destiny'}
          </button>
        </form>

        {forecast.today && (
          <div className="mt-6 p-4 bg-black border border-neonGreen rounded text-neonGreen">
            <p><strong>Mood:</strong> {forecast.mood}</p>
            <p><strong>Lucky Number:</strong> {forecast.lucky_number}</p>
            <p><strong>Color:</strong> {forecast.color}</p>
          </div>
        )}

        <button
          onClick={onClose}
          className="mt-4 w-full py-2 border border-neonPink text-neonPink hover:bg-pink-900 rounded"
        >
          Enter the Chamber
        </button>
      </div>
    </div>
  );
}
