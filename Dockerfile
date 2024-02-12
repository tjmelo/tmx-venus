FROM node:20-alpine

ENV TMX_PATH tmx-venus \
    TMX_NAME "TMX Venus"

LABEL name=${TMX_NAME}

LABEL description="A simple project CRUD elements list for add, edit, and exclude interative elements."

WORKDIR /${TMX_PATH}

COPY package*.json .

RUN npm i

COPY . .

EXPOSE 9000

CMD [ "npm", "start" ]
