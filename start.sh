#!/bin/bash
echo "Building and running brew...";
git pull;
git status;
cd docker;
./build.sh;
cd ../src;
git pull;
git status;
cd docker
./build.sh
./run.sh 1
./run.sh 2
cd ..;
cd ..;
cd ..;

echo "Building and running ontap...";
cd ot
git pull;
git status;
cd docker;
./build.sh;
cd ../src;
git pull;
git status;
cd docker
./build.sh
./run.sh 1
./run.sh 2
cd ..;
cd ..;
cd ..;

echo "Building and running link...";
cd ln
git pull;
git status;
cd docker;
./build.sh;
cd ../src;
git pull;
git status;
cd docker
./build.sh
./run.sh 1
./run.sh 2
cd ..;
cd ..;
cd ..;
