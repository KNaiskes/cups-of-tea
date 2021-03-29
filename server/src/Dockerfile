FROM node:15

WORKDIR /usr/src/app

RUN npm install -g nodemon

COPY server/package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

# Use nodemon for auto reloading changes [dev]
CMD [ "nodemon", "server/server.js" ]

# CMD [ "node", "server/server.js" ]
