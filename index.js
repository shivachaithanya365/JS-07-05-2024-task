// Ternary Operator
var a = 0 ? true : false
console.log(a);    // false
a = 5 ? true : false
console.log(a);    // true
0 ? true : false
console.log(0);     // 0
5 ? true : false
console.log(5);     // 5
// numbers
length = 16 ? true : false
console.log(length);    // true
length = 0 ? true : false
console.log(length);    // false
// string
color = "Yellow" ? true : false
console.log(color);    // true
color = "" ? true : false
console.log(color);    // false
color = " " ? true : false
console.log(color);    // true
// Booleans
x = true ? true : false
console.log(x);    // true
x = false ? true : false
console.log(x);    // false
// Object:
person = { firstName: "John", lastName: "Doe" } ? true : false
console.log(person)    // true
person = {} ? true : false
console.log(person)    // true
person = {} ? true : false
console.log(person)    // true
// Array object:
cars = ["Saab", "Volvo", "BMW"] ? true : false
console.log(cars)    // true
cars = [] ? true : false
console.log(cars)    // true
cars = [] ? true : false
console.log(cars)    // true
cars = [1, 2, 3, 4] ? true : false
console.log(cars)    // true

// words
true ? true : false
console.log(true)    // true
false ? true : false
console.log(false)    // false

a = null ? true : false
console.log(a)    // false
a = undefined ? true : false
console.log(a)    // false
x = NaN ? true : false
console.log(x)    // false

// Typeof Operator

console.log(typeof (0));   // number
console.log(typeof (5));   // number
console.log(typeof (5.6));   // number
console.log(typeof ("string"));   // string
console.log(typeof (true));   // boolean
console.log(typeof (false));   // boolean
console.log(typeof (null));   // object
console.log(typeof (NaN));   // number
console.log(typeof ([1, 2, 3, 4]));   // object
console.log(typeof ({ name: 'Shiva' }));   // object
console.log(typeof (function () { }));   // function
console.log(typeof (car));   // undefined