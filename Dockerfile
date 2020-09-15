# FROM node:12.18.3
# WORKDIR /app
# COPY package.json /app
# RUN yarn
# COPY . /app
# CMD yarn dev
# EXPOSE 3000

FROM node:10-alpine
LABEL maintainer="SouthSystem <devops@southsystem.com.br>"

RUN mkdir -p /usr/local/app

WORKDIR /usr/local/app

ADD package.json .

RUN npm install

ADD . .

ENV PORT 3000

EXPOSE ${PORT}

CMD sh -c 'DEBUG=* npm start'
