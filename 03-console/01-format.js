#!usr/bin/node

const user={
  name:'jiajia',
  age:21,
  qq:'1002475276'
};
console.log('name: %s',user.name);
console.log('qq:',user.qq);
console.log(`qq:${user.qq}`);
console.log('age:%d',user.age);
console.log('JSON:%j',user);

console.error('Error!something wrong');

