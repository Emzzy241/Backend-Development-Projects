# Use an official node.js runtime as a parent image
FROM node:22-alpine

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and the package-lock.json files to the container
COPY package*.json .

# Install the dependencies
RUN npm install

# Copy the prisma directory which contains schema.prisma
# BEFORE running prisma generate
COPY prisma ./prisma

# Generate the Prisma client
# This command needs to be run after npm install,
# as it relies on Prisma being installed as a dependency.
RUN npx prisma generate

# Copy the rest of the application code
COPY . .

# Expose the port that the app runs on
EXPOSE 5000

# Define the command to run your application
CMD ["node", "./src/server.js"]