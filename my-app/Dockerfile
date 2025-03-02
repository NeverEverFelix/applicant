# 🔹 Stage 1: Build Frontend (Vite)
FROM node:18-alpine AS frontend-build
WORKDIR /app

# Pass API URL as a build argument
ARG VITE_API_URL
ENV VITE_API_URL=${VITE_API_URL}

# Copy frontend dependencies
COPY package.json package-lock.json ./
RUN npm install --only=production

# Copy frontend source code and build it
COPY . .
RUN npm run build

# 🔹 Stage 2: Build Backend (Express)
FROM node:18-alpine AS backend-build
WORKDIR /app

# Copy backend dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy backend source code
COPY . .

# Copy frontend build (`dist/`) into backend folder so Express can serve it
COPY --from=frontend-build /app/dist ./dist

# Expose the backend API port
EXPOSE 5001

# Start the backend server (which serves both API & frontend)
CMD ["node", "API/server.js"]

