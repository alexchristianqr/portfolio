#!/bin/bash
# This is the automated release script

# guard against stupid
if [ -z "$1" ]; then
   echo "You must specify a new version level: [patch, minor, major]";
   exit 1;
fi
versionTag=$1

set -e

# make sure all our dependencies are installed so we can publish docs
#npm install

# try to build to make sure we don't publish something really broken
#npm run build

# bump the version
#echo "npm version $1"
#npm version $1
#echo "my version v$1"
#git push
#git push --tags

# start from a clean state
#rm -rf docs/ out/
#mkdir out

# build the docs
#npm run make-docs
#VERSION=`ls docs/github-api`

# switch to gh-pages and add the docs
#mv docs/github-api/* out/
#rm -rf docs/

#git checkout gh-pages
#mv out/* docs/
#echo $VERSION >> _data/versions.csv
#git add .
#git commit -m "adding docs for v$VERSION"
#git push


git tag -d "v$versionTag"
git tag -a -m "new tag v$versionTag" "v$versionTag"
git push origin "v$versionTag"

npm run build

cd dist

git init
git add -A
git commit -m "new release deployment for v$versionTag"
git push -f git@github.com:acqrdeveloper/portfolio.git master:gh-pages

cd -
