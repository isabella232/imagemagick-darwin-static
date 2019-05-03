#!/usr/bin/env node

var fs = require('fs');
var fse = require('fs-extra');
var os = require('os');
var path = require('path');

var tar = require('tar');

var version = "7.0.8";

console.log("removing stuff, that should not be published online for performance reasons");
fse.emptyDirSync(path.join(__dirname, "bin/osx/imagemagick"));
fse.emptyDirSync(path.join(__dirname, "bundle"));


console.log("compressing a tar.gz archive of the imagemagic bundle, in version "+ version);
tar.c({
    gzip: true,
    file: path.join(__dirname, '/bundle/' + version + '.tar.gz'),
    C: path.join(__dirname, "bundle_src/" + version)
}, ['.'])
.then(() => {
    console.log('compressing done!');
    console.log("ready to publish");
});
