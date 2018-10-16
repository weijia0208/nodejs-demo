#!/usr/bin/node

const fs = rquire('fs');

var src = process.argv[2],
    lnk = process.argv[3];

fs.linkSync(src,lnk);
