#!/bin/bash
echo "Building and running atg...";
cd atg;
git pull;
git status;
cd docker;
./build.sh;
cd ../src;
git pull;
git status;
cd docker
./build.sh
./run.sh
cd ..;
cd ..;
cd ..;
