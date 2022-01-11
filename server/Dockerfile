FROM node:14.14.0-alpine
WORKDIR "/app"
COPY ./package.json ./
COPY ./test.csv ./
RUN npm install
RUN npm i fast-csv
COPY . .
CMD ["npm", "run", "start"]