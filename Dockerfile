FROM node:8.12.0

WORKDIR /usr/src/app
COPY package*.json /usr/src/app/
RUN npm install --silent
COPY . /usr/src/app/
RUN npm run build

ENTRYPOINT ["node", "server"]