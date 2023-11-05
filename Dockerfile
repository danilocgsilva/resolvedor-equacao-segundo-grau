FROM node:latest

RUN npm i http-server -g
WORKDIR /app

CMD http-server
