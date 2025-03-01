# ====== Step 1: Build Backend (Node.js API) ======
FROM node:18-alpine AS backend

WORKDIR /app

# Copy backend dependencies and install
COPY package.json package-lock.json ./
RUN npm install

# Copy backend code (API folder where server.js is located)
COPY . .

# ====== Step 2: Build Frontend (Vite + Sitemap) ======
FROM node:18-alpine AS frontend

WORKDIR /app

# Copy frontend dependencies and install
COPY package.json package-lock.json ./
RUN npm install

# Copy everything (including public/)
COPY . .

# Ensure index.html is inside public/
RUN ls -l /app/public/

# ✅ Ensure dist folder exists before building to prevent sitemap issues
RUN mkdir -p dist

# ✅ Run the build process (Sitemap will generate successfully)
RUN npm run build

# ====== Step 3: Setup Nginx for Frontend ======
FROM nginx:alpine AS nginx

# Copy frontend build from previous stage
COPY --from=frontend /app/dist /usr/share/nginx/html

# Copy custom Nginx config file (to route API requests)
COPY nginx.conf /etc/nginx/nginx.conf

# Expose frontend port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]

# ====== Step 4: Final Stage (Run Backend + Serve Frontend) ======
FROM node:18-alpine

WORKDIR /app

# Copy backend files from backend build stage
COPY --from=backend /app /app

# Copy frontend build from nginx stage
COPY --from=nginx /usr/share/nginx/html /app/frontend

# Install only production dependencies for backend
RUN npm install --only=production

# Expose both frontend (80) and backend (5001)
EXPOSE 80 5001

# Start both backend and frontend
CMD ["sh", "-c", "node API/server.js & nginx -g 'daemon off;'"]
