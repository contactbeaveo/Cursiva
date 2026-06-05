@echo off
echo Building Cursiva website...
echo.

call npm run build

echo.
echo Copying additional files to dist...
copy public\.htaccess dist\.htaccess

echo.
echo Build complete! Files in dist:
dir dist

echo.
echo Ready to deploy! Upload the content of dist\ folder to your server.
pause
