FROM node:15

WORKDIR /usr/src/app

COPY server/src/package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD [ "node", "server/src/server.js" ]
