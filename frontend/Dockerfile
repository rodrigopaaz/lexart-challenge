FROM node:16.14
COPY package*.json ./
RUN ["npm", "install"]
RUN apt update
RUN apt install lsof