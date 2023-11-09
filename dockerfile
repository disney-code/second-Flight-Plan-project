# Start with a node base image
FROM node:20 AS build-stage

# Set the working directory
WORKDIR /app

# Copy the package.json and package-lock.json (or yarn.lock) files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the code
COPY . .

# Build the app
RUN npm run build

# Use nginx to serve the React app
FROM nginx:alpine

# Copy the build output to replace the default nginx contents.
COPY --from=build-stage /app/build/ /usr/share/nginx/html

# Expose port 80 to the outside once the container has launched
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
