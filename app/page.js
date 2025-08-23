import { Orbitron } from 'next/font/google';

const orbitron = Orbitron({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap'
});

export default function Home() {
  return (
    <div className={`flex items-center justify-center min-h-screen bg-black ${orbitron.className}`}>
      <h1 className="text-4xl text-neonBlue font-bold">
        Chamber of Secrets | غرفة الأسرار
      </h1>
    </div>
  );
}
