FROM node:14.17.0

ENV NODE_ENV=development
RUN yarn global add prisma

WORKDIR /app

RUN yarn install; prisma generate

CMD yarn start