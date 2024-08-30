var name = 'minhaj tapader';
console.log(name);

var age = 28;
console.log(age);

var isMarried = true;
console.log(isMarried);

// typeof
console.log(typeof isMarried);
console.log(typeof age);
console.log(typeof name);

//snake case
var first_name = 'minhaj uddin tapader';
console.log(first_name);

//camel case
var firstName = 'minhaj uddin tapader';
console.log(firstName);

//Pascal case
var FirstName = 'minhaj uddin tapader';
console.log(FirstName);

//operator
var a = 10;
var b = 5;
var c = a + b;
console.log(c);

var d = 10;
var e = 10;
console.log(d - e);

//shorthend technice operator
var a = 10;
a += 5;
console.log(a);

var b = 10;
b *= 5;
console.log(b);

//logical operator
var a = true;
var b = false;
console.log(a && b);
console.log(a || b);
console.log(!a);

var k = 10;
console.log(k % 3);

var s = '30';
console.log(s);
var res = parseInt(s);
console.log(res, typeof res);
console.log(parseFloat(s));

var n = 10.5;
console.log(parseInt(n));
console.log(parseFloat(n));

var z = 10;
console.log(z);
console.log(z.toString());
console.log((z / 3).toFixed(2));

//undefined
var x;
console.log(x);
console.log(typeof x);
console.log(isNaN(x));

//infinity
var h = -10 / 0;
console.log(h);
console.log(typeof h);
console.log(isNaN(h));

//NaN
var n = parseFloat('hello');
console.log(n);
console.log(typeof n);
console.log(isNaN(n));
console.log(NaN === NaN);

//null
var n = null;
console.log(n);
console.log(typeof n);
console.log(isNaN(n));

console.log(isNaN(null));
console.log(isNaN(undefined));
console.log(isNaN(NaN));
console.log(isNaN(10));
console.log(isNaN(10.5));
console.log(isNaN('10'));

console.log(isNaN(true));
console.log(isNaN(false));
