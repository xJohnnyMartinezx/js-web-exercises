// Primitive Types Exercises
console.log(typeof 99.9);
console.log(typeof "false");
console.log(typeof false);
console.log(typeof '0');

//Operators Exercises
console.log('1' + 2);
console.log(typeof '1' + 2);
console.log(6 % 4);
console.log('3 + 4 is ' + 3 + 4);
// how could you make this produce the correct output?
console.log('3 + 4 is ' + (3 + 4));
console.log(0 < 0);
console.log('false' == false);

// Working w/ Data Types
// 1.
var a = 1;
console.log(a);
var b = a++;
console.log(b);
var c = ++a;
console.log(c);
// what is the value of a, b, and c?

// 2.
var d = "hello";
var e = false;

d++;
e++;
console.log(d);
console.log(e);

// 3.
var perplexed; // perplexed is undefined (no value is assigned)
console.log(perplexed);
console.log(perplexed + 2 + " This is line 39");

// 4.
var price = 2.7;
var newPrice = price.toFixed(2);
console.log(newPrice);

console.log(isNaN("0"));

console.log(isNaN("1"));

console.log(isNaN(Number.MAX_VALUE));

console.log(isNaN(Infinity));

console.log(isNaN("true"));

console.log(NaN == NaN);

console.log(!!true);

console.log(!!0 + " This is line 60");

console.log(!!-0);

console.log(!!"hello")

// 5.
var sample = "Hello Codeup";
// Length inside string is 12 including space

console.log(sample.length);

console.log(sample.toUpperCase());
console.log(sample.toLowerCase());

sample = "Hello Codeup Students";
console.log(sample);

var newSample = sample.replace("Students", "Class" );
console.log(newSample);

console.log(newSample.indexOf("c"));

console.log(newSample.indexOf("C"));

console.log(newSample.substring(6,12));







