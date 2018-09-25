#!/usr/bin/node
/*
var pi = require('./02-export-var');

console.log("pi",pi);
console.log();
console.dir(module);


var circle = require('./02-export-object');
console.log(circle.diameter(20));
*/

var circle = require('./02-export-function.js');
console.log(circle(20).diameter());
console.log(circle(20).circumference());
console.log(circle(20).area());
