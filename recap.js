// let a = 10;

// increment operator
// console.log(a++);
// console.log(++a);
// console.log(a--);
// console.log(--a);

// modulus operator
console.log(10 % 3);
console.log(3 % 10);
console.log(10 % 10);

// exponentiation operator
console.log(2 ** 3);

//truthy and falsy values
// falsy values are false, 0, -0, 0n, "", null, undefined, NaN
// truthy values are all other values

// let name = 'minhaj';
// console.log(!!name);

let name = '';
console.log(!!name);

// let a = 10;
// console.log(!!a);
// let a = -1;
// console.log(!!a);
// let a = 0;
// console.log(!!a);

// let a = null;
// console.log(!!a);

// let a = undefined;
// console.log(!!a);

// console.log(typeof NaN);
// console.log(isNaN(NaN));
// console.log(NaN === NaN);

let arr = [1, 2, 3, 4, 5];
// console.log(arr.includes(3));
// console.log(arr.indexOf(8));
// console.log(typeof arr);
// console.log(Array.isArray(arr));
// arr.push(6, 7);
// arr.unshift(9, 10);
// console.log(arr);

// for (let index = arr.length - 1; index >= 0; index--) {
//   console.log(arr[index]);
// }

// let str = 'minukn';
// console.log(str.indexOf('n', 2));//here it checks from index 2

//convert inches to feet
// function convertToFeet(inches) {
//   return `${Math.floor(inches / 12)} ft and ${inches % 12 || 0} inches`;
// }

// console.log(convertToFeet(73));

//check leap year or not
// function isLeapYear(year) {
//   if (year % 4 === 0 && year % 100 !== 0) {
//     return true;
//   } else if (year % 400 === 0) {
//     return true;
//   }
//   return false;
// }

// console.log(isLeapYear(2022));

//some math built in functions
// console.log(Math.PI);
// console.log(Math.max(1, 2, 3, 4, 5));
// console.log(Math.min(1, 2, 3, 4, 5));
// console.log(Math.pow(2, 3));
// console.log(Math.sqrt(16));
// console.log(Math.abs(-10));
// console.log(Math.floor(10.9));
// console.log(Math.ceil(10.1));
// console.log(Math.trunc(10.9)); //remove part after decimal point
// console.log(Math.round(10.5)); // if above 5 round up, if below 5 round down
// console.log(Math.floor(Math.random() * 10) + 10); //10 to 20
// console.log(Math.floor(Math.random() * 10) + 30); //30 to 40

//swap two numbers
//1
// let a = 10;
// let b = 20;
// a = a + b;
// b = a - b;
// a = a - b;
// console.log(a, b);

//2
// let a = 10;
// let b = 20;
// let t = a;
// a = b;
// b = t;
// console.log(a, b);

//3
// let a = 10;
// let b = 20;
// // [c, d] = [b, a];
// // console.log(c, d);
// [a, b] = [b, a];
// console.log(a, b);

//longest word in string
// function longestWord(str) {
//   let arr = str.split(' ');
//   let longest = arr[0];
//   for (const element of arr) {
//     if (element.length > longest.length) {
//       longest = element;
//     }
//   }
//   return longest;
// }

// console.log(longestWord('i am minhaj uddin '));

//min from an object
// let obj = [
//   { name: 'minhaj', age: 20 },
//   { name: 'minu', age: 21 },
//   { name: 'min', age: 22 },
//   { name: 'minh', age: 23 },
// ];

// function minAge(obj) {
//   let min = obj[0].age;
//   for (const element of obj) {
//     if (element.age < min) {
//       min = element.age;
//     }
//   }
//   return min;
// }

// console.log(minAge(obj));

//calculator with operator
// function calculator(num1, num2, operator) {
//   if (operator === '+') {
//     return num1 + num2;
//   } else if (operator === '-') {
//     return num1 - num2;
//   } else if (operator === '*') {
//     return num1 * num2;
//   } else if (operator === '/') {
//     return num1 / num2;
//   } else if (operator === '%') {
//     return num1 % num2;
//   } else if (operator === '**') {
//     return num1 ** num2;
//   } else {
//     return 'Invalid operator';
//   }
// }
// console.log(calculator(1, 2, '-'));

//layred discount count
// function discountCount(quantity, price) {
//   let discount200 = 0.2;
//   let discount300 = 0.3;
//   let discount400 = 0.4;
//   if (quantity <= 100) {
//     return price * quantity;
//   } else if (quantity <= 200) {
//     return price * 100 + (quantity - 100) * price * discount200;
//   } else if (quantity <= 300) {
//     return (
//       price * 100 +
//       (quantity - 200) * price * discount300 +
//       100 * price * discount200
//     );
//   } else {
//     return (
//       price * 100 +
//       (quantity - 300) * price * discount400 +
//       100 * price * discount300 +
//       100 * price * discount200
//     );
//   }
// }

// console.log(discountCount(110, 10));

//6 pillers of javascript
//variables
//functions
//objects
//arrays
//conditionals
//loops

//salary increment sum from an array of objects with experience year
// let salaryObj = [
//   { name: 'minhaj', exp: 3, salary: 20000, increment: 4000 },
//   { name: 'minu', exp: 4, salary: 30000, increment: 5000 },
//   { name: 'min', exp: 5, salary: 40000, increment: 6000 },
//   { name: 'minh', exp: 6, salary: 50000, increment: 7000 },
// ];

// function salarySum(salaryObj) {
//   let sum = 0;
//   for (const element of salaryObj) {
//     sum += element.increment * element.exp + element.salary;
//   }
//   return sum;
// }
// console.log(salarySum(salaryObj));
