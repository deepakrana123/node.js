
var a=require('./node.js')
const sayHii =(name)=>{
    console.log(`Hello there ${name}`)
}



sayHii(a.name);
sayHii(a.name1);



module.exports=sayHii;