import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';


export default defineConfig({
  plugins: [react()],
  root: ".", 
  build: {
    outDir: "dist",
    rollupOptions: {
      input: "index.html" 
    }
  },
  server: {
    host: 'localhost',
    port: 5173,
    strictPort: true, 
    hmr: true 
  }
});

