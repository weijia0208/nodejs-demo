#!/usr/bin/node

const fs = require('fs'),
      file = process.argv[2],
      log = console.log;

var buf = fs.readFileSync(file);

log('width:',buf.readInt32LE(0x12));
log('height:',buf.readInt32LE(0x16));
log('color depth:',buf.readUInt16LE(0x1c));
