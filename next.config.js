/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = nextConfig;
const withNextIntl = require('next-intl/plugin')('./i18n.jsx');

module.exports = withNextIntl({});
