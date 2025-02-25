FROM node:18

WORKDIR /app

COPY . .

RUN npm install

RUN npm run build

EXPOSE 1337

ENV HOST "0.0.0.0"

CMD ["npm", "start"]