#!/usr/bin/env sh

rm -rf $1/src/components/app
mkdir $1/src/components/app

rm -rf $1/src/tabledata
mkdir $1/src/tabledata

cp -r ../prototipo/src/components/app/* $1/src/components/app
cp ../prototipo/src/tabledata.js $1/src
cp -r ../prototipo/src/tabledata/* $1/src/tabledata
cp ../prototipo/src/index.js $1/src


cp -r ../functional-specs/* $1/functional-specs/.
cp $1/src/img/* $1/functional-specs/img

cp ../functional-specs/title-page.tex $1/functional-specs
cp ../functional-specs/title-page-en.tex $1/functional-specs

#cp -r ../technical-specs/* $1/technical-specs/.

if [ ! -d $1/cypress/integration ]
		then
			mkdir $1/cypress/integration
fi
cp -r ../cypress/integration/* $1/cypress/integration

