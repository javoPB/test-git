        #!/usr/bin/env sh

git clone https://github.com/efuentesp/riot-ui-prototype.git $1

#mkdir $1/src-gen
#mkdir $1/bash

#cp /c/@Programs/mapencoding.sh mapencoding.sh

mkdir $1/functional-specs
mkdir $1/functional-specs/img
mkdir $1/technical-specs
./copy.sh $1

cd $1
npm install
npm run dev

