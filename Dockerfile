FROM node:12
RUN npm i yarn
# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Installing dependencies
COPY package*.json /usr/src/app/
RUN yarn install

# Copying source files
COPY . /usr/src/app

# Building app
#RUN yarn build
RUN yarn build

# Running the app
CMD "yarn" "start"
EXPOSE 4555
