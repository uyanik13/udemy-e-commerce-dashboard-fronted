# Use the official Node.js image as the base image
FROM node:14

# Set the working directory in the container
ENV NODE_ENV=production

WORKDIR /app

COPY ["package.json", "package-lock.json*", "./"]

# Install the dependencies
RUN npm install -g vite

RUN npm install

# Copy the rest of the project files to the container
COPY . .

# Build the Vue.js project
RUN npm run build

# Specify the command to run when the container starts
CMD ["npm", "run", "preview"]
