// function print(n){
//     if(n===0)
//         return;
//     print(n-1);
//     console.log(n);
// }
// print(6);
//F(n)=F(n−1)+F(n−2)
// function fibonacci(fi){
//     if(fi===0) return 0;
//    if(fi===1) return 1;
// return  fibonacci(fi-1) + fibonacci(fi-2);
   
// }
// fibonacci(6);
console.log("Sum of digit");

function sumdigit(n){
    if(n===0) return 0;
    return (n%10) + sumdigit(Math.floor(n/10));
}
console.log(sumdigit(223));

console.log("Power raised");

function power(x ,n1){
    if(n1===0) return 1;
    return x* power(x ,n1-1);
}
console.log(power(3,4)); 
console.log("Greatest Common Divisor");
function GCD(a,b){
    if(b===0) return a;
    return GCD(b,a%b);
}

console.log(GCD(44,55));
 
console.log("String Count");

function Countchar(str,ch){
    if(str.length===0) return 0;

let count=0;
if(str[0]===ch){
    count=1;
}
return count + Countchar(str.slice(1),ch);
}
console.log(Countchar("Apple","p"));
console.log("Palindrome");
function isPalindrome(str){
    if(str.length <= 1) return true;

    if(str[0] !== str[str.length - 1]) return false;

    return isPalindrome(str.slice(1, -1));
}

console.log(isPalindrome("madam")); // true
console.log(isPalindrome("hello")); // false