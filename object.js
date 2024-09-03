//non primitive data type

//object

let obj = {
  name: 'John',
  age: 20,
  institution: {
    name: 'SHU',
    location: 'Netrokona',
  },
  details: function () {
    return `${this.name} is ${this.age} years old`;
  },
  'property-name': `for accessing property which have space or special character we use []`,
};

//get and set property
// console.log(obj.details());
// console.log(obj['property-name']);
// obj.gender = 'male';
// console.log(obj);
// obj['property-name2'] = 'property-name2';
// console.log(obj);

// obj['@add-new-func'] = function () {
//   return 'new function';
// };
// console.log(obj);

//obj loop
// for (const key in obj) {
//   console.log(key, obj[key]);
// }

//delete property
// delete obj.gender;
// console.log(obj);

//check property
// console.log(obj.hasOwnProperty('age'));

//nasted property delete
// delete obj.institution.location;
// console.log(obj);

// console.log(Object.keys(obj));
// console.log(Object.values(obj));
// console.log(Object.entries(obj));

//object declare
//1. object literal
let obj1 = {
  name: 'John',
  age: 20,
};
//2. object create
let obj2 = Object.create(null);
obj2.name = 'Jane';

//3. object assign
let obj3 = Object.assign({}, { name: 'minhaj' });

//4. object spread
let baseObj = { name: 'minhaj' };
let obj4 = { ...baseObj, age: 22 };

//5. object from entries
let entries = [['name', 'minhaj']];
let obj5 = Object.fromEntries(entries);

// console.log('obj1', obj1);
// console.log('obj2', obj2);
// console.log('obj3', obj3);
// console.log('obj4', obj4);
// console.log('obj5', obj5);
