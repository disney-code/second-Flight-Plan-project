# this is a multi stage docker build.
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

# Run tests - if this command fails, the build stage stops
RUN npm run test

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

##



# This is a multi stage docker build
# Node base image (build stage)
# Nginx Image (Serve Stage). This stage is for serving the built application.  
# The build output from the first stage located in /app/build is copied into the Nginx image at
# (continued) /usr/share/nginx/html which replaces the default content served by nginx
#Port 80 is exposed which is the standard port for HTTP web traffic
#Nginx is then started with the command `nginx -g daemon off` ensuring that nginx stays in the 
#foreground and doesnt run as a background daemon. 
#The multi stage build allows for a more efficient build process by separating the building
#and serving stages. It helps to reduce the final image size, as only the artifacts neeeded to 
#run the application (from the build-stage) are included in the final image, wihout the entire node.js 
#and build dependencies
#COPY --from=build-stage /app/build/ /usr/share/nginx/html is used to transfer filed from the build stage (Node.js) to
#the serve stage (Nginx)
# In multi-stage builds, each stage is isolated from the others.
# The COPY --from=<stage> command allows you to copy files and directories from a 
#previous stage to the current one
#/usr/share/nginx/html this is the directory where nginx serves static files from
 