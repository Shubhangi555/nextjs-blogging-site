// /** @type {import('next').NextConfig} */
// const nextConfig = {};

// export default nextConfig;

import mdx from '@next/mdx';

const withMDX = mdx({
  extension: /\.mdx?$/,
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'mdx'],
   images: {
    domains: ['cdn.sanity.io'],
  },
};

export default withMDX(nextConfig);

