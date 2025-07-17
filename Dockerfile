# Use Alpine Linux with Node.js for smaller image size
FROM node:20-alpine

# Set working directory inside container
WORKDIR /app

# Copy package files first (for better caching)
COPY package*.json ./

# Install dependencies
RUN npm install --force --legacy-peer-deps

# Copy application code
COPY . .

# Build the Next.js application
RUN npm run build

# Expose port 3000 to outside world
EXPOSE 3000

# Command to run when container starts
CMD ["npm", "start"] 