FROM node:12.18.4-alpine

RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home

WORKDIR /home/node/app

COPY package*.json ./

USER node

RUN npm install

COPY --chown=node:node . . 

ENTRYPOINT ["sh", "init.sh"]

EXPOSE 3001

CMD [ "./init.sh" ]