#!/bin/bash

CURRENT_COMMIT=$(git rev-parse HEAD)
echo $CURRENT_COMMIT
git checkout dist
git reset --hard $CURRENT_COMMIT
npm run build
gzip -rk dist
git add -f dist
git commit -m "distributing \"$CURRENT_COMMIT\""
git push -f origin dist:dist
git checkout master
