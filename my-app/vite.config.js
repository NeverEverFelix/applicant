import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
//import fs from 'fs';

export default defineConfig({
  plugins: [react()],
  root: ".", // Ensure Vite looks in the project root
  build: {
    outDir: "dist",
    rollupOptions: {
      input: "index.html" // Ensure Vite knows where index.html is
    }
  }
});
//   server: {
//     https: fs.existsSync('./certs/server.key') && fs.existsSync('./certs/server.crt')
//       ? {
//           key: fs.readFileSync('./certs/server.key'),
//           cert: fs.readFileSync('./certs/server.crt'),
//         }
//       : false, // Falls back to HTTP if no SSL certs exist
//     host: '0.0.0.0', // Allow external access (useful in Docker)
//     port: 443, // Use HTTPS default port
//   }
// });

