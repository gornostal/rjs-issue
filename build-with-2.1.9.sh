#!/bin/sh

rm -rf build/myapp/

npm install requirejs@2.1.9
node node_modules/requirejs/bin/r.js -o build.js