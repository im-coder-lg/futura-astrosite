import { defineConfig } from 'astro/config';

// https://astro.build/config
export default {
  projectRoot: '.',
  pages: './src/pages',
  dist: './dist',
  public: './public',
  buildOptions: {
    site: '',
    sitemap: true,
  },
  devOptions: {
    port: 3000,
    // tailwindConfig: '',
  },  
};

