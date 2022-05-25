FROM node:14.17.4

RUN yarn global add prisma

EXPOSE $PORT

WORKDIR /app

COPY package.json .
COPY yarn.lock .
RUN yarn install

COPY . .
RUN prisma generate; yarn build

CMD yarn run dev