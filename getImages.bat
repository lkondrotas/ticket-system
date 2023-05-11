@echo off
echo Adding images to Docker...

echo Adding server image
docker load -i ./docker_images/server.zip
echo Adding client image
docker load -i ./docker_images/client.zip

echo All images are added to your Docker app. Please run start.bat file to start Docker containers.