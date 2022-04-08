FROM node:14.17.0

WORKDIR /app

RUN yarn global add prisma

ADD ./ ./prisma/

CMD prisma migrate deploy
