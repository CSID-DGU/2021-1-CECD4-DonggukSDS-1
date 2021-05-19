::::::::::::::::::::::::::::::::::::::
::     Build script for Windows     ::
::     Witten by Park Seungun       ::     
::     Created at 2021-05-19        ::
::::::::::::::::::::::::::::::::::::::

set ROOTPATH=%CD%

:: build WEB\Front-end
cd %ROOTPATH%\WEB\Front-end
call build.bat
cd %ROOTPATH%