@echo off
echo Deleting containers...

echo Stopping container:
docker stop MongoDB
echo Removing container:
docker rm MongoDB
echo Stopping container:
docker stop Server
echo Removing container:
docker rm Server
echo Stopping container:
docker stop Client
echo Removing container:
docker rm Client

echo Removing image:
docker image rm mongo
echo Removing image:
docker image rm server
echo Removing image:
docker image rm client

echo All containers have been deleted.