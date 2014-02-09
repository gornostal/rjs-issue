#!/bin/sh

rm -rf build/myapp/

npm install requirejs@2.1.10
node node_modules/requirejs/bin/r.js -o build.js