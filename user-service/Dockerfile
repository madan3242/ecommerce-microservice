ARG NODE_VERSION=20.18.3

FROM node:${NODE_VERSION}-alpine

WORKDIR /usr/src/app

COPY package.json /usr/src/app/package.json
COPY package-lock.json /usr/src/app/package-lock.json

RUN npm ci

COPY . /usr/src/app

EXPOSE 8000

CMD npm start