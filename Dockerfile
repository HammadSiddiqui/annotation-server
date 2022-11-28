FROM node:latest

COPY . /src

WORKDIR /src

RUN npm install -g nodemon

RUN npm install --production

EXPOSE 3000

CMD ["nodemon", "src/index.js"]