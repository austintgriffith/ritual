#!/bin/bash
#usage: ./build.sh [DOCKERIMAGEVERSION]
#we need to move the package.json file in so we can npm install during the build
FILE="package.json"
if [ -f $FILE ];
then
   echo "File $FILE exists."
else
   echo "File $FILE does not exist, copying..."
	 cp ../$FILE $FILE
fi
#copy in package json if it is different
cmp -s package.json ../package.json > /dev/null
if [ $? -eq 1 ]; then
	echo "package.json has updated... copying...";
    cp ../package.json .
else
    echo "package.json is unchanged.";
fi
echo "Building base ritual container...";
docker build -t ritualwp .
