import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/

export default defineConfig({
  root: ".", // Ensure Vite looks in the project root
  build: {
    outDir: "dist",
  },
});

