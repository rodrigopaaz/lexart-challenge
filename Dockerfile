FROM node:16.14
WORKDIR /app/frontend
COPY package*.json ./
RUN ["npm", "install"]
COPY . ./
EXPOSE 3000
ENTRYPOINT [ "npm", "start" ]
RUN apt update
RUN apt install lsof