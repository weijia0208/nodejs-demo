#!urs/bin/node

//console.log('first');
//global.setTimeout(function(){
 // console.log('second');
//},1000);
//console.log('third');


function Bomb(){
  this.message = "Bomb!";
}
Bomb.prototype.explode = function(){
  console.log(this.message);
};

var b = new Bomb();

var timeID = setTimeout(b.explode.bind(b),2000);
//clearTimeout(timeID);
