#!/usr/bin/ndoe

const stdin = process.stdin;
stdin.resume();
stdin.setEncoding('utf8');

stdin.on('data',(data)=>{
  process.stdout.write(data.toUpperCase());
});

global.setTimeout(()=>{
  stdin.removeAllListener();
},3000);

stdin.on('end',()=>{
  process.exit();
})


