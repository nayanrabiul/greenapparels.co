/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    imgbb_key: '3ff08d206dc1a741ca323fdfb387ccb4',
    // backend_url: process.env.NODE_ENV === 'development' ? 'http://localhost:5900/' : '',
    backend_url: process.env.NODE_ENV === 'development' ? 'http://192.168.0.108:5900/' : '',
  }
}

module.exports = nextConfig
