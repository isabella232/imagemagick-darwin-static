#!/usr/bin/env node

var fs = require('fs');
var fse = require('fs-extra');
var os = require('os');
var path = require('path');
var tar = require('tar');
var version = "7.0.8";

// Using callbacks
console.log('Going to extract compressed imagemagick library, version: '+version);
tar.
    x({
        file: path.join(__dirname, '/bundle/' + version + '.tar.gz'),
        C: path.join(__dirname, 'bin/osx/imagemagick')
    })
    .then(() => {
        fse.removeSync(path.join(__dirname, "bundle"));
        console.log('Successfully extracted;!');
    }
);


