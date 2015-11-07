#!/bin/bash
echo "Stopping...";
docker stop atglink1
docker stop atglink2
docker stop ontap1
docker stop ontap2
docker stop brew1
docker stop brew2
docker stop prox
