# Pull official base image
FROM node:10.5.0

# Optionally set a maintainer name to let people know who made this image.
MAINTAINER Walace Silva <wsilva.emp@gmail.com>

# Set working directory, where the commands will be ran:
WORKDIR /source

# Add `/source/node_modules/.bin` to $PATH
ENV PATH /source/node_modules/.bin:$PATH

# Install app dependencies
COPY package.json /source/package.json
COPY package-lock.json /source/package-lock.json
RUN npm install

# Start app
CMD ["npm", "start"]