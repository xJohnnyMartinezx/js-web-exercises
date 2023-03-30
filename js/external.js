"use strict";

console.log("Hello from external JavaScript")

// ALERT

alert("Welcome to my website");

// PROMPT
var usersFavColor = prompt("What's your favorite color?");
alert("No way! " + usersFavColor + " is my favorite color too!");

// Movie Rental
var theLittleMermaid = prompt("How many days will you be renting The Little Mermaid?");
var brotherBear = prompt("How many days will you be renting Brother Bear?");
var hercules = prompt("How many days will you be renting Hercules?");

function totalRentalPrice(){
    var rentalTotal = (theLittleMermaid * 3) + (brotherBear * 3) + (hercules * 3);
    alert("Total rental price is " + "$" + rentalTotal);
    return rentalTotal;
}
console.log(totalRentalPrice());

// Contractor Work
var googleMoney = 400;
var amazonMoney = 380;
var facebookMoney = 350;

var googleHours = prompt("How many hours did you work for Google?");
var amazonHours = prompt("How many hours did you work for Amazon?");
var facebookHours = prompt("How many hours did you work for FaceBook?");

function totalPaid(){
    var totalGSalary = googleMoney * googleHours;
    var totalASalary = amazonMoney * amazonHours;
    var totalFSalary = facebookMoney * facebookHours;
    var overAllTotal = totalGSalary + totalASalary + totalFSalary
    alert("Total payment is " + "$" + (overAllTotal));
    return overAllTotal;
}

console.log(totalPaid());
