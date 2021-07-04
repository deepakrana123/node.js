console.log(" we are in the fs");


const {readFileSync,writeFileSync} = require('fs');


const first=readFileSync('./content/first.txt',  'utf-8');
const third=readFileSync('./content/second.txt',  'utf-8');

writeFileSync('./content/result-sync.txt',`Here is th result:${first},${third}`,{flag:'a'})

console.log(first,third);