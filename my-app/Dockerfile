# Use a lightweight Node.js image as the base
FROM node:18-alpine AS build

# Set the working directory
WORKDIR /app

# Copy package.json and install dependencies (both frontend & backend)
COPY package.json package-lock.json ./
RUN npm install

# Copy the entire project into the container
COPY . .

ARG VITE_API_URL
ENV VITE_API_URL=${VITE_API_URL}

# Build the frontend (Vite)
RUN mkdir -p dist && npm run build

# Expose the port that Express will run on
EXPOSE 5001

# Start the backend server (which serves the frontend)
CMD ["node", "src/API/server.js"]
