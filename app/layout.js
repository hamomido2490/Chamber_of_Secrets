import { Orbitron } from 'next/font/google'
import { Cairo } from 'next/font/google'  // إضافة خط عربي بديل
 
const orbitron = Orbitron({
  subsets: ['latin'],  // التغيير هنا
  weight: ['400', '700'],
  display: 'swap',
  variable: '--font-orbitron',
})

const cairo = Cairo({
  subsets: ['arabic'],  // خط يدعم العربية
  weight: ['400', '700'],
  display: 'swap',
  variable: '--font-cairo',
})
