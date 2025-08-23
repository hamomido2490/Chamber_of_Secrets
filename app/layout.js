import Head from 'next/head';

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>{children}</body>
    </html>
  );
}
