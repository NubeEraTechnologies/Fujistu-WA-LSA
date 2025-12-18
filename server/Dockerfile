# Base image
FROM node:18-alpine

# Create app directory
WORKDIR /usr/src/app

# Copy dependencies files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy source code
COPY . .

# Expose port (will use env var)
ARG PORT
ENV PORT=${PORT:-3001}
EXPOSE ${PORT}

# Start the app
CMD ["npm", "start"]
