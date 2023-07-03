/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // basePath: '/',
  output: 'export',
  trailingSlash: true,
  distDir: 'dist',
  images: {
    unoptimized: true
    // domains: ['res.cloudinary.com']
  },
  // eslint: {
  //   ignoreDuringBuilds: true
  // },
  webpackDevMiddleware: (config) => {
    config.watchOptions = {
      poll: 1000,
      aggregateTimeout: 300
    }
    return config
  }
}

module.exports = nextConfig
