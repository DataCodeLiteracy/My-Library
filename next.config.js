/** @type {import('next').NextConfig} */

const { createVanillaExtractPlugin } = require("@vanilla-extract/next-plugin")
const withVanillaExtract = createVanillaExtractPlugin()

const nextConfig = {
  images: {
    remotePatterns: [{ protocol: "https", hostname: "image.aladin.co.kr" }]
  },
  async rewrites() {
    return [
      {
        source: "/search/api/:path*",
        destination: "http://www.aladin.co.kr/ttb/api/ItemSearch.aspx/:path*"
      }
    ]
  },
  trailingSlash: true
}

module.exports = withVanillaExtract(nextConfig)
