FROM ubuntu:14.04
MAINTAINER Austin Griffith <me@austingriffith.com>

# Install all the stuff for php and mysql plus some net junk
RUN apt-get update -y;apt-get upgrade -y;apt-get install -y \
  git \
  openssh-server \
  nano \
  net-tools \
  htop \
  curl \
  telnet \
  build-essential ;
RUN apt-get clean

# Node.js official repo & update NPM to latest
RUN curl -sL https://deb.nodesource.com/setup_5.x | sudo -E bash - && \
    apt-get install -y nodejs && \
    npm install -g npm

#copy in the package json to the app directory to run the install
# (this directory should be linked over with -v on run so you can live edit your code locally)
ADD package.json /root/package.json
RUN cd /root;npm install

#install webpack globally
RUN npm install webpack -g

#install nodemon globally
RUN npm install nodemon -g
