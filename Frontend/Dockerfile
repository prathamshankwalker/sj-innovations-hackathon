# FROM node:alpine
# WORKDIR /app
# ADD . /app
# RUN npm install
# EXPOSE 8000
# CMD npm run dev


FROM node:10
WORKDIR /usr/src/app/Frontend
COPY package*.json ./
RUN npm install
EXPOSE 3000
CMD ["npm", "run", "dev"]
