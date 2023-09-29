import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig ({
  projectRoot: '.',
  pages: './src/pages',
  dist: './dist',
  public: './public',
  buildOptions: {
    site: 'https://futura-astrosite.vercel.app/', // Let's try Vercel, see how that pans out.
    sitemap: true,
  },
  devOptions: {
    port: 3000,
    // tailwindConfig: '',
  },  
});

