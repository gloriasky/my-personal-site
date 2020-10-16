FROM node:8.10.0
RUN npm install -g serve npm@6.10.0
RUN mkdir /app/
WORKDIR /app/
COPY ./package.json /app/
COPY ./package-lock.json /app/
RUN npm ci

COPY ./ /app/

CMD npm run build && serve -s build -p 3000
