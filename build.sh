# Build script for Linux
# Written by Park Seungun
# Created at 2021-05-19

ROOTPATH=`pwd -P`

# build WEB/Front-end
cd "$ROOTPATH/WEB/Front-end"
./build.sh
cd $ROOTPATH