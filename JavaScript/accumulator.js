// let sum=0;
// let input;

// // do{
// //     input=parseInt(prompt("Enter a Number (or type 'stop' to stop) "),10);

// //     if(!isNaN(input)){
// //         sum+=input;
// //     }
// // }while(!isNaN(input)); 

// // console.log("Total Sum:",sum);

// do{
//     input=parseInt(prompt("Enter a Even Number: "),10);

//     if(input%2===0){
//         continue;
//     }
//     sum += input;
// }while(input%2===0); 

// console.log("Total Sum:",sum);

// for( let i=0;i<=20;i++){
//     if(i%2!==0){
//         continue;
//     }
//     console.log("Even Numbers are:",i);
// }
//first way
//  let square;
// while(true){
//     let num = parseInt(prompt("Enter An Integer Number:"),10);
//     if(num===-1){
//         break;
//     } else {
//        square = num*num;
//     }

//     console.log("All Square Numbers Are:",square);
// }

//Second way
  
while(true){
    let num = parseInt(prompt("Enter An Integer Number:"),10);
    if(num===-1){
        break;
    } else {
     let  square = num*num;
       console.log("All Square Numbers Are:",square);
    }

  
}