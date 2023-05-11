@echo off
echo Starting Docker containers...

echo Creating network for containers
docker network create NETWORK
echo Starting MONGODB container
docker run -it -v .\\MONGODB_DATA:/data/db -p 27017:27017 --name MongoDB --network=NETWORK -d mongo
docker start MongoDB
echo Starting Server container
docker run -it -p 5000:5000 --network=NETWORK --name Server -d server
docker start Server
echo Starting Client container
docker run -it -p 3000:3000 --network=NETWORK --name Client -d client
docker start Client

cls

>nul chcp 65001 
setlocal enabledelayedexpansion

set "_spc=                              "
set "_bar=■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■"
set "_msg= Starting containers. Please wait."
<con: echo\ 

for /f %%a in ('copy/Z "%~dpf0" nul')do for /f skip^=4 %%b in ('echo;prompt;$H^|cmd')do set "BS=%%b" & set "CR=%%a"
for /l %%L in (1 1 30)do <con: set/p "'=!CR!!BS!!CR![!_bar:~0,%%~L!!BS!!_spc:~%%L!]!_msg!"<nul & >nul timeout.exe 1

start http://localhost:3000/

endlocal & color & goto :eof