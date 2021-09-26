#!/bin/bash
cd /app/
 
APPNAME=c2m-open-graphql
 
pm2 stop ${APPNAME}
 
exit 0