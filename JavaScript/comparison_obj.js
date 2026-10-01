// console.log("equality comparison");
// let student1 = {
//  firstname:"Ashraf",
//  lastname:"Aslam",
//  rollNo:43,

// }
// let student2 = {
//  firstname:"Arshad",
//  lastname:"Iqbal",
//  rollNo:13,
 
// }

// function check(obj1, obj2){
//     return JSON.stringify(obj1)==JSON.stringify(obj2);
// }
// console.log(check(student1,student2));



let mydate = new Date();
let hour = mydate.getHours();
if(hour>=4&&hour<12){
    console.log("Good Morning Ashraf");
} 
else if(hour>=12&&hour<17){
    console.log("Good Afternoon Ashraf")
}else if(hour>=17&&hour <=18){
    console.log("Good Evening Ashraf");
}else{
    console.log(`Times Now ${mydate.getHours()} Hour!! \nGood Night Ashraf`);
}
