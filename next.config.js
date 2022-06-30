if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = nextConfig;
