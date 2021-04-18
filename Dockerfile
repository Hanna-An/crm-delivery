FROM node:14.15

RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/crm-delivery

WORKDIR /home/node/crm-delivery

COPY package*.json ./

USER node

RUN npm install

COPY --chown=node:node . .

EXPOSE 8080

CMD [ "npm", "run", "dev"]