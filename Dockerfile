FROM node:14-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 8888
RUN npx prisma generate

CMD ["npm", "run", "dev"]