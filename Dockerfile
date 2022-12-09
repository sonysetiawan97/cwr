FROM node:lts-alpine

ARG ENV
WORKDIR /app
COPY ./package.json ./package-lock.json /app/
RUN apk --no-cache add --virtual builds-deps build-base python
RUN set -x \
  && echo "ENV=${ENV}" \
  && if [ "${ENV}" != "development" ]; then \
    npm i --only=production; \
    npm cache clean --force; \
  fi
COPY . /app

CMD [ "node", "server.js" ]
