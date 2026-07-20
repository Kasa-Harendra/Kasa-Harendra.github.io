FROM node:alpine

WORKDIR /app

COPY *.* ./

RUN npm install

COPY src/ src/
COPY public/ public/

EXPOSE 5173

CMD ["npm", "run", "dev", "--", "--host"]