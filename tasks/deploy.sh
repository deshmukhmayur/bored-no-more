#!/bin/bash
set -e

echo "\nCleaning up any leftovers"
rm -r ./dist

echo "\n\nGenerating build"
npm run build
echo "\n\nChanging the working directory to the generated dist"
cd ./dist

echo "\n\nInitializing git and setting up the remote"
git init
git config user.name "Deployment-Bot"
git config user.email "deploymentbot@example.com"

git remote add origin git@github.com:deshmukhmayur/bored-no-more.git
git add -A
git commit -m "Deploying updates: $(date)"
echo "\n\nDeploying files to the github pages branch (gh-pages)"
git push origin master:gh-pages -f

rm -rf .git
exit 0