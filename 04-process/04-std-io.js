#!usr/bin/node

const msg = ['name','email','QQ','mobile'];

var i = 1,me = {};
console.log(msg[0]+':');

process.stdin.on('data',(data)=>{
  eval('me.' + msg[i-1] + '="' + data.slice(0,data.length-1) + '"');
  if(i===4){
    console.log(me);
    process.exit();
  }else{
    console.log(msg[i++] + ':');
  }
 // console.log(data.slice(0,data.length-1).toString('utf8'));
});

process.stdin.on('end',()=>{
  console.log(me);
});
