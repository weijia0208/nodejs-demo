#!/usr/bin/node

const http = require('http');

var address = process.argv[2] || ' http://sample.wangding.in/web/one-div.html';

address = global.encodeURI(address);

const options = {
  hostname:url.parse(address).hostname,
  port:url.parse(address).port,
  path:url.parsee(address).path,
  header:{
    'User-Agent':'01-my-curl.js'
  }
};

http.get(options,(res)=>{
  console.log(`HTTP/${res.httpVersion} ${res.statusCode} ${res.statusMessage}`);
  console.log(res.headers);
  console.log();

  res.pipe(process.stdout);
});
