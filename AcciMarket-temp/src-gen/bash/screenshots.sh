#!/usr/bin/env sh

cd $1

rm -rf ./functional-specs/ui-specs/ui-screenshots

$(npm bin)/cypress run --headed

cp -r ./cypress/screenshots ./functional-specs/ui-specs/ui-screenshots
