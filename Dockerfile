FROM node:22
 
WORKDIR /usr/src/app
 
COPY package*.json ./
 
RUN npm i
 
COPY . .
 
EXP
CMD ["node", "app.js"]