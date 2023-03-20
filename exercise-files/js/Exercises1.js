"use strict";

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


var d = "hello";
var e = false;

d++;
e++;
console.log(d);
console.log(e);


var perplexed; // perplexed is undefined (no value is assigned)
console.log(perplexed);
console.log(perplexed + 2 + " This is line 39");


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

// 2.
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

console.log(newSample.indexOf("p"));

console.log(newSample.substring(6,11+1));

console.log(newSample.substring(6,12));

// 3.
// Movie Rental
var theLittleMermaid = 3;
var brotherBear = 5;
var hercules = 1;

function totalRentalPrice(){
    // return (theLittleMermaid * 3) + (brotherBear * 3) + (hercules * 3);
    return "Total rental price is " + "$" + (theLittleMermaid + brotherBear + hercules) * 3;
}
console.log(totalRentalPrice());

// Contractor Work
var googleMoney = 400;
var amazonMoney = 380;
var facebookMoney = 350;

var googleHours = 6;
var amazonHours = 4;
var facebookHours = 10;

function totalPaid(){
    var totalGSalary = googleMoney * googleHours;
    var totalASalary = amazonMoney * amazonHours;
    var totalFSalary = facebookMoney * facebookHours;

    return "Total payment is " + "$" + (totalGSalary + totalASalary + totalFSalary);
}

console.log(totalPaid());

// Student Enrollment
var fullClass = 50;
var currentClassCount = 49;
var classConflict = false;

function canEnroll(){
    if (currentClassCount < fullClass && classConflict === false){
        return "You can enroll in this class";
    } else {
        return "The class is full or you have a conflict";
    }
}

console.log(canEnroll());

// Product Offer

var itemsBought = 1;
var offerExpired = false;
var premiumMember = true;

function productOffer(){
    if (itemsBought > 2 && offerExpired === false){
        return "You qualify for this offer.";
    } else if ( premiumMember === true && offerExpired === false){
        return "Thank you being a premium member.";
    } else {
        return "Sorry you do not qualify for this offer, or the offer has expired.";
    }
}

console.log(productOffer());

// 4. User Conditions
var username = 'codeup';
var password = 'notastrongpassword';

var passwordLength = password.length >= 5;
var passwordCondition = !password.includes(username);
var usernameLength = username.length <= 20;
var noWhiteSpaceUsername = username.trim();
var noWhiteSpacePassword = password.trim();


console.log(username);
console.log(password);
console.log(passwordLength);
console.log(passwordCondition);
console.log(usernameLength);
console.log(noWhiteSpaceUsername);
console.log(noWhiteSpacePassword);








