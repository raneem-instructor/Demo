# Use the official node image - LTS version
FROM node:20 

WORKDIR /app

COPY package*.json ./

RUN npm install 

COPY . .

EXPOSE 3000

CMD ["node","app.js"]