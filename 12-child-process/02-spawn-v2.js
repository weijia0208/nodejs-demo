#!/usr/bin/node

const cp = require('child_process');

const child = cp.spawn('./02-child.js');

child.stdout.pipe(process.stdout);

child.stderr.pipe(process.stderr);
