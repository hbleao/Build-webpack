FROM node:12.18.3
WORKDIR /app
COPY package.json /app
RUN yarn
COPY . /app
CMD yarn dev
EXPOSE 3000
