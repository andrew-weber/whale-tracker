FROM node:14.17.0

RUN yarn global add prisma

WORKDIR /app
ADD . .

EXPOSE $PORT

RUN yarn install; prisma generate

CMD yarn run dev