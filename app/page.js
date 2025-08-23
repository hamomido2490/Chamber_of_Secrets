import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className="flex items-center justify-center min-h-screen bg-black">
        <h1 className="text-4xl text-neonBlue font-bold">
          Chamber of Secrets | غرفة الأسرار
        </h1>
      </div>
    </>
  );
}
