/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export for Hostinger shared hosting — no Node server there.
  // Content is fetched from the local Strapi instance at build time and
  // baked into the output; rebuild + re-upload out/ whenever content
  // changes (see README.md).
  output: "export",
  // Generates about-us/index.html instead of about-us.html — Apache on
  // Hostinger serves index.html inside a matching directory by default,
  // but won't resolve extensionless URLs to .html files without extra
  // server config. This makes /about-us work with zero server config.
  trailingSlash: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "1337",
      },
    ],
  },
};

module.exports = nextConfig;
