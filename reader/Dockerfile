# syntax=docker/dockerfile:1

FROM node:14.17.0

ENV NODE_ENV=development
RUN yarn global add prisma

WORKDIR /app

CMD yarn install; prisma generate; yarn start