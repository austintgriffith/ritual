#!/bin/bash
serviceName="ritualwp"
typeset -i buildCount=$(cat version.txt)
echo "Loading version $buildCount from /tmp/...";
docker load < /tmp/$serviceName-$buildCount.tar
