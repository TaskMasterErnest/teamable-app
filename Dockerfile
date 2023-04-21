FROM node:18.14.1-alpine

WORKDIR /usr/src/app

COPY package*.json ./

# forcing Docker to download the latest npm
RUN npm i -g npm@latest --force 
RUN npm install

COPY . . 

EXPOSE 3000

CMD [ "npm", "run", "start" ]
