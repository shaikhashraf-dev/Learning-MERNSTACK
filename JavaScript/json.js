console.clear();

// Create an array of numbers [5,6]. Add 4 at the beginning and 7 
// at the end of the array.
// 2. Create a method to return an element at a particular position in 
// the array.
// 3. Create an array copy using slice method.
// 4. Using accumulator pattern concatenate all the strings in the 
// given array [‘KG’, ‘Coding’, ‘Javascript’, ‘Course’, ‘is’, ‘Best’]

// let num =[1,2,3,6,8];
// num.unshift(4);
// console.log(num);
// num.push(7);
// console.log(num);
// function getElement(arr, position) {
//     return arr[position];
// }

// let numbers = [10, 20, 30, 40];

// console.log(getElement(numbers, 2));
// let slice = num.slice(1,4);
// console.log(slice);


// let arr = ['KG', 'Coding', 'Javascript', 'Course', 'is', 'Best'];

// let result = "";

// for (let i = 0; i < arr.length; i++) {
//     result += arr[i] + " ";
// }

// console.log(result);

let student ={
    FirstName:"Ashraf Aslam",
    LastName:"Shaikh",
    Age:19,
    Department:"BSC IT",
    Class:"SYIT",
    Courses : ["HTML","CSS","JAVASCRIPT","REACT","NODE JS","EXPRESS JS","MONGO"],
};

// const JsonString= JSON.stringify(student);
// console.log("Json String:",JsonString);
const stingi ='{"FirstName":"Shaikh Ashraf Aslam","LastName":"Shaikh","Age":19,"Department":"BSC IT","Class":"TYIT","Courses":["HTML","CSS","JAVASCRIPT","REACT","NODE JS","EXPRESS JS","MONGO"]}';
const parse = JSON.parse(stingi);
console.log(parse);
console.log(parse.FirstName);


localStorage.setItem("Details of Student:",student);