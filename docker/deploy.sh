#!/bin/bash
serviceName="ritualwp"

docker build -t $serviceName .
typeset -i buildCount=$(cat version.txt)
buildCount=$buildCount+1
echo $buildCount>version.txt
echo "Tagging service as version $buildCount...";
docker tag $serviceName $serviceName:$buildCount
echo "Dumping $serviceName image to binary version $buildCount...";
docker save "$serviceName:$buildCount" > "$serviceName-$buildCount".tar
echo "Upload the binary to mydock..."
scp "$serviceName-$buildCount".tar ec2-user@mydock:/tmp/
echo "Upload the binary to mydock2..."
scp "$serviceName-$buildCount".tar ec2-user@mydock2:/tmp/
