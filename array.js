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
console.log(Array.from({ length: 3 }, (_, i) => i * 2));
