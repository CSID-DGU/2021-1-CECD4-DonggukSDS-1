::::::::::::::::::::::::::::::::::::::
::     Build script for Windows     ::
::     Witten by Park Seungun       ::     
::     Created at 2021-05-19        ::
::::::::::::::::::::::::::::::::::::::

set CURPATH=%CD%

:: build react app
cd %CD%\app
call yarn build

:: create docker image
cd %CURPATH%
start /WAIT docker build -t frontend .