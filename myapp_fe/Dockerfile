# Base image
FROM node:20

# Set working directory
WORKDIR /app

# Install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy source code
COPY . .

# Expose the port
EXPOSE 5173

# Command to run the application
CMD ["npm", "run", "dev"]
