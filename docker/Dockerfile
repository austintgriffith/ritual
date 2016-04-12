FROM node:5.10.1
MAINTAINER Austin Griffith <me@austingriffith.com>

#PATCH BECAUSE OF: https://github.com/npm/npm/issues/9863
RUN rm -rf /usr/local/lib/node_modules/npm \
 && git clone https://github.com/DIREKTSPEED-LTD/npm /usr/local/lib/node_modules/npm \
 && rm -rf /usr/local/lib/node_modules/npm/.git \
 && rm -f  /usr/bin/npm \
 && ln -s -f /usr/local/bin/npm /usr/bin/npm \
 && cd /usr/local/lib/node_modules/npm \
 && npm install

ADD package.json /root/package.json
RUN cd /root;npm install

#install webpack globally
RUN npm install webpack -g

#install nodemon globally
RUN npm install nodemon -g
