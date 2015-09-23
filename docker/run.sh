#!/bin/bash
#remove existing container
docker rm -f "ritual"
#run
docker run --name="ritual" -p 50022:22 -d ritual
