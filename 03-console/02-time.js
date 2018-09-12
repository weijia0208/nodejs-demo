#!/usr/bin/node

function longTask(){
  var n;
  for(var i=0;i<10000;i++){
    for(var j=0;j<10000;j++){
      n=i*j;
    }
  }
  return n;
}

console.time('TIME');
longTask();
console.timeEnd('TIME');
