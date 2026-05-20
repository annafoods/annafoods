/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'cdn.sanity.io' },
    ],
  },

  // Verberg technologie-informatie
  poweredByHeader: false,

  // Security headers op elke pagina
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN', // Voorkomt clickjacking
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff', // Voorkomt MIME sniffing
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()', // Beperkt browser features
          },
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on',
          },
        ],
      },
    ]
  },

  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      'react/compiler-runtime': require.resolve('react/jsx-runtime'),
    }
    return config
  },
}

module.exports = nextConfig
