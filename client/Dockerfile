FROM node:18-alpine

# Create app directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy source code
COPY . .

# Parameterized port
ENV PORT=3000
EXPOSE 3000

# Start React app
CMD ["npm", "start"]
