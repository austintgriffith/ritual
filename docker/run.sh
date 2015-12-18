#!/bin/bash
#remove existing container
docker rm -f "ritualwp"
#run
docker run --name="ritualwp" -p 50022:22 -d ritualwp
