import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import sitemap from "vite-plugin-sitemap"; // ✅ Correct import

export default defineConfig({
  plugins: [
    react(),
    sitemap({
      hostname: "http://52.14.182.21", // Change this to your domain when deploying
      exclude: ["/admin", "/private"], // Exclude sensitive pages
      changefreq: "daily",
      priority: 0.8,
      readable: true, // Makes the sitemap more human-readable
    }),
  ],
  root: ".",
  build: {
    outDir: "dist",
    rollupOptions: {
      input: "index.html",
    },
    chunkSizeWarningLimit: 500,
    brotliSize: false,
    manifest: true,
  },
  server: {
    host: "0.0.0.0",
    port: 5173,
    strictPort: true,
    hmr: {
      clientPort: 5173,
    },
  },
  optimizeDeps: {
    include: ["react", "react-dom"],
  },
});
