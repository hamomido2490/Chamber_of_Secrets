// app/layout.js
import { Orbitron } from 'next/font/google'
import { Cairo } from 'next/font/google'
import './globals.css'

const orbitron = Orbitron({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
  variable: '--font-orbitron',
})

const cairo = Cairo({
  subsets: ['arabic'],
  weight: ['400', '700'],
  display: 'swap',
  variable: '--font-cairo',
})

export const metadata = {
  title: 'Chamber of Secrets | غرفة الأسرار',
  description: 'Interactive horoscope and personality analysis website',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" dir="ltr">
      <body className={`${orbitron.variable} ${cairo.variable} font-sans`}>
        {children}
      </body>
    </html>
  )
}
