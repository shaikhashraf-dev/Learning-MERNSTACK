function greet(){
    console.log("Assalamu Alaikum Ashraf");
}

function process(Callback){
    Callback();
}

process(greet);

console.log("Excersice No 2");

function add(a,b){
console.log(a-b);  
}

function calculate(a,b,Callback){
Callback(a,b);

}

calculate(40,20,add);