cd C:\Users\admin\Documents\prism\war1\react\sildingmenu
call npm run build
pushd
cd build
git init
git add -A
git commit -m "initial"
git remote add origin https://github.com/thepinesoftware/thepinesoftware.github.io
git push -f origin master
popd