// let first=40;
// let outer =(outerArg) =>{
//     const outerConst=89;

//  let inner=(innerArg)=>{
//     const innerConst=99;
//     console.log(`Inner first:${first}`);
//     console.log(`Inner outerArg:${outerArg}`);
//     console.log(`Inner outerConst:${outerConst}`);
//     console.log(`Inner innerArg:${innerArg}`);
//     console.log(`Inner innerConst:${innerConst}`);
//  };
//   console.log(`Outer first:${first}`);
//     console.log(`Outer outerArg:${outerArg}`);
//     console.log(`Outer outerConst:${outerConst}`);
   
//  return inner;

// };
// outer(56)(60);

// function Outer(){
//     const outerVariable ='I AM OUTSIDE';

//     function Inner(){
//   console.log(outerVariable);
//     }
//     return Inner;

// }
// const close = Outer();
// close();


//counter
// function makeCounter(){
//     let count =0;
//    return function(){
//     count += 1;
//     return count;
//    };
// }
// const counting = makeCounter();
// console.log(counting());
// console.log(counting());
// console.log(counting());

let createCounter =()=>{
let count =0;

return ()=> count++;
}

const counting = createCounter();
console.log(counting());
console.log(counting());
console.log(counting());

const counting2 = createCounter();
console.log(counting2());