FROM node:5.10.0
MAINTAINER Austin Griffith <me@austingriffith.com>

ADD package.json /root/package.json
RUN cd /root;npm install

#install webpack globally
RUN npm install webpack -g

#install nodemon globally
RUN npm install nodemon -g
