FROM node:14.17.0
RUN yarn global add prisma

WORKDIR /app

EXPOSE 1337

CMD yarn install; prisma generate; yarn run dev