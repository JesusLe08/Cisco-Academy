let a = 1/0;
let b = -Infinity;

console.log(a); // -> Infinity
console.log(b); // -> -Infinity
console.log(typeof a); // -> number
console.log(typeof b); // -> number
   
let s = "it's definitely not a number";
let n = s * 10;
console.log(n); // -> NaN
console.log(typeof n); // -> number

//STRINGS
let message1 = "C:\\\\Windows";

console.log(message1);

//CONVERSION A STRING
let str = "text";
let strStr = String(str);

console.log(`${typeof str}: ${str}`);
console.log(`${typeof strStr} : ${strStr}`);