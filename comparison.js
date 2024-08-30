console.log(1 < 2);
console.log(1 > 2);
console.log(1 <= 2);
console.log(1 >= 2);
console.log(1 == 2);
console.log(1 != 2);
console.log(1 > 2);
console.log(1 === '1');
console.log(1 !== 2);
let first = true;
console.log(!first);
console.log(!!first);

//difference between var, let and const
//var function scope
//let block scope
//const block scope

// function test() {
//   var a = 10;
//   if (a) {
//     var a = 20;
//     console.log(a);
//   }
//   console.log(a);
// }
// test();

// function test2() {
//   let a = 10;
//   if (a) {
//     let a = 20;
//     console.log(a);
//   }
//   console.log(a);
// }
// test2();

// const a = 10;
// a = 20;
// console.log(a);

var a = 10;
if (1) {
  var a = 20;
  console.log(a);
}
console.log(a);

let b = 10;
if (1) {
  let b = 20;
  console.log(b);
}
console.log(b);
