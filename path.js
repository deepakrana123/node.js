const path =require('path');

console.log(path.sep);
console.log(path);



const filepath = path.join('/content' , 'subfolder' , 'text.txt');

console.log(filepath);

console.log(path.sep)
console.log(path.normalize)
const a=path.basename(filepath);console.log(a);

const b=path.basename(filepath);console.log(b);
