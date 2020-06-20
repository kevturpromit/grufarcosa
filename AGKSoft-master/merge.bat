@echo off

if "%1"=="" goto invalid

echo.
echo Show me what I changed....
echo.
git status
echo.
pause

echo.
echo git add .
echo.
git add .

echo.
echo git commit 
echo.

git commit -m "%1 %2 %3 %4 %5 %6 %7 %8 %9"

echo.
echo git push - Pushes it on internet
echo.

git push

echo all done
echo.
echo *** TO GO LIVE, type "build" from a Command Prompt ***
echo.
goto done

:invalid
cls
echo Invalid Merge Format...
echo      Merge "your changes"
echo.

:done
