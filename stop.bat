@echo off
echo Stopping containers...

echo Stopping container:
docker stop MongoDB
echo Stopping container:
docker stop Server
echo Stopping container:
docker stop Client

echo All containers have been stopped.