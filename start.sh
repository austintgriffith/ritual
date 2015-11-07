#!/bin/bash
echo "Running Prod Brew Build...";
cd ..

echo "Building and running prod ot...";
cd ot;
git pull;
git status;
cd docker;
./build.sh;
cd ../src;
git pull;
git status;
cd docker
./build.sh
./run.sh 1;
./run.sh 2;
cd ..;
cd ..;
cd ..;

echo "Building and running prod bc...";
cd bc;
git pull;
git status;
cd docker;
./build.sh;
cd ../src;
git pull;
git status;
cd docker
./build.sh
./run.sh 1;
./run.sh 2;
cd ..;
cd ..;
cd ..;

echo "Building and running prod ln...";
cd ln;
git pull;
git status;
cd docker;
./build.sh;
cd ../src;
git pull;
git status;
cd docker
./build.sh
./run.sh 1;
./run.sh 2;
cd ..;
cd ..;
cd ..;
