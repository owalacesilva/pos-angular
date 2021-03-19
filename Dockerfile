# Pull official base image
FROM node:10-slim

# Optionally set a maintainer name to let people know who made this image.
LABEL Walace Silva <wsilva.emp@gmail.com>

RUN apt-get update \
  && apt-get install -yqq curl \
  wget \
  curl \
  git \
  ssh \
  gcc \
  make \
  build-essential \
  --fix-missing \
  --no-install-recommends \
  && apt-get clean \
  && rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*

# Set working directory, where the commands will be ran:
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./

RUN npm install

# Add `/usr/src/app/node_modules/.bin` to $PATH
ENV PATH /usr/src/app/node_modules/.bin:$PATH

COPY . .

EXPOSE 4200

# Start app
CMD ["ng", "serve", "--host", "0.0.0.0"]
