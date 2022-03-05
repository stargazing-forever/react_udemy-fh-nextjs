# CREATE A IMAGE BUT 1GB, ANOTHER RECOMMENDED

FROM node:16-alpine

RUN mkdir -p /app

WORKDIR /app

COPY package.json /app

RUN yarn install

COPY . /app

RUN yarn build

# USER prod-user

EXPOSE 3000

CMD ["yarn", "start"]

