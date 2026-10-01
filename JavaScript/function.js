const myname = function(a,b){
return a*b;
};
console.log(myname(4,5));

setTimeout(function(){
    console.log("this is anonymous");
},1000);

//Normal function
function add1(first,second){
    return first + second;
}
console.log(add1(56,26));

//Anonymous Function
const add2 = function(first,second){
    return first + second;

}
console.log(add2(36,98));

//Arrow Function
const add3 = (first,second) =>{
    return first + second;
}
console.log(add3(64,24));


const mult = number => {
    return number * number;
}
console.log(mult(7));
const divide = number => number/number;
console.log(divide(9));




//Higher Order Function
const createDouble = () =>{
return num => num*2;

   
}
const twice = createDouble();
console.log(twice(6));
console.log(createDouble()(8));