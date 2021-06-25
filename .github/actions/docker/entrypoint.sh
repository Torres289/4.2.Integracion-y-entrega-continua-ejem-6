#!/bin/sh -l
time=$(date --utc -d "$1 hours" +'%Y%m%d.%H%M%S')
echo "::set-output name=time::$time"