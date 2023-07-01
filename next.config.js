/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  async generateStaticParams() {
    return {
      '/': { page: '/' },
    };
  },
};

module.exports = nextConfig;
