FROM node:14.17.4

RUN yarn global add prisma

EXPOSE $PORT

WORKDIR /app
ADD package.json .
ADD yarn.lock .
RUN yarn install

COPY . .
RUN prisma generate; yarn build

CMD yarn run dev