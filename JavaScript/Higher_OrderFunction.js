const doubled =(num)=>{
   return num =>num *2;
   
}
const twice = doubled();
console.log(twice(2));

console.log(doubled()(6));