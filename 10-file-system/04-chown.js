#!/usr/bin/node

const fs = require('fs');

var file = process.argv[2],
    gid = process.argv[3],
    uid = process.argv[4];

fs.chownSync(file,Number(uid),Number(gid));


