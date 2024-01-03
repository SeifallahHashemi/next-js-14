/** @type {import('next').NextConfig} */
import withPlaiceholder from "@plaiceholder/next"
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      }
    ]
  }
}

// module.exports = nextConfig
export default withPlaiceholder(nextConfig);