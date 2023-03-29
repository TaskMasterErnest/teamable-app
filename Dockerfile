FROM node:18.14.1-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . . 

EXPOSE 3000

CMD [ "npm", "run", "start" ]
