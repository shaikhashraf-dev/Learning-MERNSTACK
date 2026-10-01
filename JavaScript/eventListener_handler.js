console.log("Events");
//Event
let eventHandler = () =>{
console.log("Clicked Me");
}
let button = document.getElementById('mybutton');
button.onclick=eventHandler;


//event listener
let eventListener = ()=>{
    for(let i=0;i<6;i++){
        console.log(i);
    }
}
button.addEventListener('click',eventHandler);
button.addEventListener('click',eventListener);
button.removeEventListener('click',eventListener);


const outer =document.querySelector(".outer");

const inner =document.querySelector(".inner");

outer.addEventListener('click',()=>{
    console.log("outer");
  
},true);
inner.addEventListener('click',(event)=>{
    console.log("inner");
    event.stopPropagation();
});

