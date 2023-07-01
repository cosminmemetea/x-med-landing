/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  exportPathMap: function () {
    return {
      '/': { page: '/' },
    };
  },
};

module.exports = nextConfig;
