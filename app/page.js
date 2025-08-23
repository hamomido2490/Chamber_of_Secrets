'use client';

import { useState, useEffect } from 'react';
import HoroscopePopup from './components/HoroscopePopup';

export default function Home() {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    // عرض البوب أب فقط في الزيارة الأولى
    const visited = localStorage.getItem('visited');
    if (!visited) {
      setShowPopup(true);
      localStorage.setItem('visited', 'true');
    }
  }, []);

  return (
    <>
      {showPopup && <HoroscopePopup onClose={() => setShowPopup(false)} />}
      <main className="text-center p-8">
        <h1 className="text-4xl md:text-6xl text-neonBlue font-bold animate-pulse">
          Chamber of Secrets | غرفة الأسرار
        </h1>
        <p className="mt-4 text-neonPurple text-lg">
          Unlock your cosmic & psychological DNA
        </p>
      </main>
    </>
  );
}
