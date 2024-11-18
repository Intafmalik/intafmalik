// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })


import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: '/index.html', // Ensure correct input file
    },
    outDir: 'dist', // Output directory for build files
    assetsDir: 'assets', // Directory for assets
  },
});
