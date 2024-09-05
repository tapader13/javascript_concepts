let a = [1, 2, 3, 4, 5];
console.log(a.length);
// console.log(a[0]);
// console.log(a[4]);
// console.log(a[5]);
// console.log(typeof a);
// a[0] = 10;
// console.log(a);
// a.push(6);
// console.log(a);
// a.pop();
// console.log(a);
// a.shift();
// console.log(a);
// a.unshift(0);
// console.log(a);

//array methods
let fruits = ['apple', 'banana', 'orange', 'grape', 'mango'];
console.log(fruits.includes('apple'));
console.log(fruits.indexOf('banana'));
console.log(Array.isArray(fruits));
console.log(fruits.join(' '));
let subjects = ['math', 'science', 'english', 'history', 'geography'];
console.log(fruits.concat(subjects));
console.log(fruits.slice(0, 1));
// console.log(fruits);
// let result = subjects.splice(1, 2);
// console.log(result);
// console.log(subjects);
// let result = subjects.splice(1, 2, 't1');
// console.log(result);
// console.log(subjects);

// console.log(Array.from('minhaj'));
// console.log(Array.from([1, 2, 3], (opt, i) => opt * 2));
// console.log(Array.from({ length: 3 }, (_, i) => i * 2));

//reverse array
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let ans = [];
for (const element of arr) {
  ans.unshift(element);
}
console.log(ans);

//sort array

//array problem practice
//get even numbers
// let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// for (let index = 0; index < arr1.length; index++) {
//   if (arr1[index] % 2 !== 0) {
//     arr1.splice(index, 1);
//   }
// }
// console.log(arr1);

//concat all elements to make 1 string
// let arr1 = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
// let str = '';
// for (let index = 0; index < arr1.length; index++) {
//   str += arr1[index];
// }
// console.log(str);

//reverese word of an string
// let arr1 = 'i am minhaj uddin tapader';
// let str = arr1.split(' ');
// let ans1 = [];
// for (const element of str) {
//   ans1.unshift(element);
// }
// console.log(ans1.join(' '));

//sort array of strings|| numbers
//string unicode uppercase has lower value so it come first
// let str1 = [
//   'apple',
//   'Bornana',
//   'banana',
//   'orange',
//   'grape',
//   'mango',
//   'cherry',
//   'pineapple',
//   'Strawberry',
// ];

// console.log(str1.sort());

let str1 = [1, 1, 2, 22, 4, 5, 6, 7, 8, 9, 10];
// console.log(str1.sort()); //not work perfect way cause sort work with string alphabetically

//ascending
console.log(str1.sort((a, b) => a - b)); //here it checks + - 0 if - then a first if + then b first if 0 then a then b

//descending
console.log(str1.sort((a, b) => b - a));
