let student={
firstName:"Ashraf",
LastName:"Aslam",
RollNO:43,
Subjects:["HTML","CSS","JS","React","NODEJS","EXPRESS"],

};

function GettingName(detail){
   let {firstName,LastName} = detail;
console.log("Your First Name is:",firstName,LastName);
};

GettingName(student);

console.log("Excersice");
let object={
 message:"Good Job",
 status:"Complete",
};
console.log(object);

let {message,status}=object;
console.log("Message:",message);
console.log("Status:",status);