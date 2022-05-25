FROM node:14.17.0

RUN yarn global add prisma

EXPOSE $PORT

WORKDIR /app

COPY package.json .
RUN yarn install; prisma generate

COPY . .

CMD yarn run dev