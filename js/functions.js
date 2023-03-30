"use strict";

// IIFF Function
(function (){

/**
 * TODO:
 * Create a function called 'sayHello' that takes a parameter 'name'.
 * When called, the function should return a message that says hello to the passed in name.
 *
 * Example
 * > sayHello("codeup") // returns "Hello, codeup!"
 */

function sayHello(name){
    return "Hello, " + name;
}

console.log(sayHello("Johnny"));

    /**
 * TODO:
 * Call the function 'sayHello' and pass your name as a string literal argument.
 * Store the result of the function call in a variable named 'helloMessage'.
 *
 * console.log 'helloMessage' to check your work
 */
    var  helloMessage = sayHello("Codeup!");
    console.log(helloMessage);

/**
 * TODO:
 * Store your name as a string in a variable named 'myName', and pass that
 * variable to the 'sayHello' function. You should see the same output in the
 * console.
 */

var myName = "Johnny!"

    console.log(sayHello(myName));

// Don't modify the following line, it generates a random number between 1 and 3
// and stores it in a variable named random
var random = Math.floor((Math.random() * 3) + 1);

/**
 * TODO:
 * Create a function called 'isTwo' that takes a number as a parameter.
 * The function should return a boolean value based on whether or not the passed
 * number is the number 2.
 *
 *
 * Example
 * > isTwo(1) // returns false
 * > isTwo(2) // returns true
 * > isTwo(3) // returns false
 *
 * Call the function 'isTwo' passing the variable 'random' as a argument.
 *
 * console.log *outside of the function* to check your work (you should see a
 * different result everytime you refresh the page if you are using the random
 * number)
 */

function isTwo(num){
    return num === 2;
}

    console.log(isTwo(random));
    console.log("Random generated number is: " + random)
    /**
 * TODO:
 * Create a function named 'calculateTip' to calculate a tip on a bill at a
 * restaurant. The function should accept a tip percentage and the total of the
 * bill, and return the amount to tip
 *
 * Examples:
 * > calculateTip(0.20, 20) // returns 4
 * > calculateTip(0.25, 25.50) // returns 6.375
 * > calculateTip(0.15, 33.42) // returns 5.013
 */

    function calculateTip(tipPercentage, billTotal){
        return alert("This is how much you should tip: $" + (tipPercentage * billTotal));
    }

    // console.log(calculateTip(0.20, 20));
    // console.log(calculateTip(0.25, 25.50));
    // console.log(calculateTip(0.15, 33.42));

/**
 * TODO:
 * Use prompt and alert in combination with your calculateTip function to
 * prompt the user for the bill total and a percentage they would like to tip,
 * then display the dollar amount they should tip
 */

    // var userTipPercentage = prompt("How much would you like to tip?");
    // var convertedTipPercentage = userTipPercentage/100;
    // var userBillTotal = prompt("What is your bill total?");
    //
    // calculateTip(convertedTipPercentage, userBillTotal);

/**
 * TODO:
 * Create a function named `applyDiscount`. This function should accept a price
 * (before a discount is applied), and a discount percentage (a number between 0
 * and 1). It should return the result of applying the discount to the original
 * price.
 *
 * Example:
 * > var originalPrice = 100;
 * > var discountPercent = .2; // 20%
 * > applyDiscount(originalPrice, discountPercent) // 80
 *
 * > applyDiscount(45.99, 0.12) // 40.4712
 */

// *****RANDOM DISCOUNT GENERATOR*******
var randomDiscPercent = Math.random().toFixed(2);

    console.log("RANDOM DISCOUNT IS: " + randomDiscPercent + "%");

function applyDiscount(preDiscPrice, discPercent){
    var discAmount = preDiscPrice * discPercent;
     return "This is your total price with the discount: $" + (preDiscPrice - discAmount);
}

    // ****TEST WITH FIXED DISCOUNT*******
    console.log("Fixed discount: " + applyDiscount(100, .20));
    // ****TEST WITH RANDOM DISCOUNT BETWEEN 0 AND .99****
    console.log("Random discount: " + applyDiscount(100, randomDiscPercent));


})();