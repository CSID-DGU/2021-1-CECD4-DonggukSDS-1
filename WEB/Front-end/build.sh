# Build script for Linux
# Written by Park Seungun
# Created at 2021-05-19

CURPATH=`pwd -P`

# build react app
cd $CURPATH/app
yarn build

# create docker image
cd $CURPATH
docker build -t frontend .