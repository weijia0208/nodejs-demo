#!usr/bin/node

const pid = process.argv[2],
      sig = process.argv[3];

//pid ang sig

if(process.argv.length !== 4 || isNaN(Number(pid))){
  console.error('命令行参数错误');
  process.exit(1);
}
process.kill(pid,sig);
