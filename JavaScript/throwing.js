// function num(a,b){
//     if(b===0){
//         throw new Error("Divide By Zero");;
//     }
//     return a/b;

// }

// console.log(num(6,3));
// console.log(num(6,6));

class ErrorValidateMessage extends Error{
 constructor(message){
    super(message);
    this.name='Validation Error';

    
 }


}

function validateInput(input){
 if(!input){
    throw new ErrorValidateMessage("Give a Input!");
 }
}

try{
    validateInput('');
} catch (error){
   if(error instanceof ErrorValidateMessage)
   {
    console.log("Validation error",error.message);
   }
}