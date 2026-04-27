import { PHASE_DEVELOPMENT_SERVER } from 'next/constants.js';

const isProd = process.env.NODE_ENV === 'production';

export default function nextConfig(phase) {
  return {
    output: 'export',
    distDir: phase === PHASE_DEVELOPMENT_SERVER ? '.next-dev' : '.next',
    images: { unoptimized: true },
    basePath: isProd ? '/surachat-portfolio-template' : '',
    assetPrefix: isProd ? '/surachat-portfolio-template/' : '',
  };
}
