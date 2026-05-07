@echo off
echo ====================================================
echo        KDL Embedded AI - Auto Deploy Tool          
echo ====================================================

echo [1/4] Scanning local changes...
git status -s

echo.
echo [2/4] Cleaning cache and testing local build...
call npm run clear
call npm run build

if %ERRORLEVEL% NEQ 0 (
    echo.
    echo [ERROR] Build failed! Please check your Markdown syntax.
    pause
    exit /b %ERRORLEVEL%
)
echo Local build passed!

echo.
echo [3/4] Adding files to git stage...
git add .

:: Generate timestamp for commit message
for /f "tokens=2 delims==" %%I in ('wmic os get localdatetime /value') do set datetime=%%I
set YYYY=%datetime:~0,4%
set MM=%datetime:~4,2%
set DD=%datetime:~6,2%
set HH=%datetime:~8,2%
set Min=%datetime:~10,2%

set commit_msg=docs: auto update %YYYY%-%MM%-%DD% %HH%:%Min%

echo Commit message: "%commit_msg%"
git commit -m "%commit_msg%"

echo.
echo [4/4] Pushing to GitHub (main)...
git push origin main

if %ERRORLEVEL% EQU 0 (
    echo.
    echo ====================================================
    echo  ?? SUCCESS! Please wait 2 minutes for online update.
    echo ====================================================
) else (
    echo.
    echo [ERROR] Push failed! Please run "git pull" manually.
)

pause