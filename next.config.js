const { withNextVideo } = require('next-video/process');

/** @type {import('next').NextConfig} */
// import withPlaiceholder from "@plaiceholder/next"
/*const withPWA = require('next-pwa')({
  dest: 'public'
})*/
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
module.exports = withNextVideo(nextConfig);
// export default withPlaiceholder(nextConfig);
