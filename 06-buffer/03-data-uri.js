#!/usr/bin/node

const http = require('http'),
      fs = require('fs'),
      file = process.argv[2],
      path = require('path');

if(process.argv.length !== 3){
  console.error('命令行参数格式：cmd fileName');
  process.exit(1);
}

var data = fs.readFileSync(file).toString('base64');
var ext = path.extname(file);

var uriData = 'data:image/' + ext.slice(1,ext.length)+';base64,'+data;
var html = '<!DOCTYPE html><html><body><img src="'+ uriData +'"></body></html>';

http.createServer((req,res) =>{
  res.end(html);
}).listen(8080);
