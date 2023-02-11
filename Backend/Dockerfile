# FROM node:alpine
# WORKDIR /app
# ADD . /app
# RUN npm install
# EXPOSE 8000
# CMD npm test


FROM node:10
WORKDIR /usr/src/app/Backend
COPY package*.json ./
RUN npm install
EXPOSE 3080
CMD ["npm", "run", "dev"]
