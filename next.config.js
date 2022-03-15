const withTM = require("next-transpile-modules")(["@sdf/components"]);

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = withTM(nextConfig);
