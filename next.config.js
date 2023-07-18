/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
        'lh3.googleusercontent.com',
        'itm-recrutement-ws.vercel.app',
        'ifsappstorage.blob.core.windows.net',
        'itmafrica.blob.core.windows.net',
        'www.itmafrica.com',
        'res.cloudinary.com'
    ],
    remotePatterns: [
        {
            protocol: 'http',
            hostname: 'localhost',
            port: '3000',
            pathname: 'http://localhost:3000'
        }
    ]
}
}

module.exports = nextConfig
