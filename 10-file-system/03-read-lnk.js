#!/usr/bin/node

const fs = require('fs');

var src = process.argv[2];

console.log(fs.readlinkSync(src));
