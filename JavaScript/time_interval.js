(()=>{
let counter=0;
let increment =()=> console.log(counter++);
console.log('Start');
increment();
setTimeout(increment,3000)
console.log('End');
let id=setInterval(increment,2000)
clearInterval(id,1000);
})();