import { Orbitron } from 'next/font/google';
import './globals.css';

// تحميل الخط مع الدعم للغتين
const orbitron = Orbitron({
  subsets: ['latin', 'arabic'],
  weight: ['400', '500', '700', '900'],
  variable: '--font-orbitron',
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${orbitron.variable} font-sans bg-black text-neonBlue min-h-screen flex flex-col`}
        style={{
          background: 'linear-gradient(to bottom, #000000, #1A1A1A)',
          margin: 0,
          padding: 0,
        }}
      >
        <div className="flex-1 flex items-center justify-center">
          {children}
        </div>
      </body>
    </html>
  );
}
