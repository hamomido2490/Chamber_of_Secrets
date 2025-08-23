/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    useLightningcss: true // تعطيل lightningcss عشان مشاكل 32-bit
  }
};

module.exports = nextConfig;
