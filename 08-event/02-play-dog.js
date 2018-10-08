#!/usr/bin/node

const Dog = require('./02-dog.js');

var hascy = new Dog('hascy',4);
var taidi = new Dog('taidi',8);

hascy.on('bark',onBark);
taidi.on('bark',onBark);

function onBark(){
  console.log('%s barked! energy:%s',this.name(),this.energy());
}
