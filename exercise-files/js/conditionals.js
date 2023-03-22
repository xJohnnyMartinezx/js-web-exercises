"use strict";

// IIFF Function
(function (){

/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message which relates to the
 * color stated in the argument of the function. For colors you do not have
 * responses written for, return a string stating so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *
 *
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */

// *****EXERCISE 1.*******

   //  var userColor = prompt("What's you favorite color?")
   //      function analyzeColor(userInput) {
   //          // toLowerCase makes userColor case-insensitive (Converting the string/user input to all lower case.)
   //          if (userInput.toLowerCase() === "green"){
   //              alert("Wow! that's my favorite color too!");
   //          } else if (userInput.toLowerCase() === "yellow"){
   //              alert("Yellow is the color of the Sun.");
   //          } else{
   //              alert("Nice pick.");
   //          }
   //  }
   //
   // analyzeColor(userColor);
   //  console.log("The user entered: " + userColor);

// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * TODO:
 * Pass the `randomColor` variable to your 'analyzeColor' function and console.log the results.
 * You should see a different message every time you refresh the page
 */

// ****** EXERCISE 2 *****
//     confirm("Do you want the computer to randomly generate a color?");
//     analyzeColor(randomColor);
//     console.log("Random generated color is: " + randomColor);
/**
 * TODO:
 * Comment out the code above, and refactor your function to use a switch-case statement
 */

// *******EXERCISE 3*******
//     var userColor = prompt("What's your favorite color")
//
//     switch (userColor.toLowerCase()) {
//         case "green":
//             alert("Cool!, that's my favorite color too");
//             break;
//         case "yellow":
//             alert("Yellow is the color of the Sun.");
//             break;
//         default:
//             alert("Nice pick!");
//             break;
//     }

/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */

// ****** ALREADY DONE IN EXERCISE 1 ***********


/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * everything for free!.
 *
 * Write a function named `calculateTotal` which accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */

        // Exercise 5

    //     var min = Math.ceil(0);
    //     var max = Math.floor(5);
    //     var randomLuckyNum = Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
    // console.log(randomLuckyNum);

    // var total = 20;
    // var twoPer = total * 0.25;
    //
    // console.log(twoPer);

// function calculateTotal(luckyNum, totalAmnt){
//
//     // Discounts:
//     var tenPer = totalAmnt * 0.10;
//     var twentyFivePer = totalAmnt * 0.25;
//     var thirtyFivePer = totalAmnt * 0.35
//     var fiftyPer = totalAmnt * 0.50;
//     var freePer = totalAmnt * 1;
//
//     if (luckyNum === 0){
//         alert("Sorry you do not get a discount. Your total is: $" + totalAmnt);
//     } else if (luckyNum === 1){
//         alert("Congrats, you won a 10% discount which is: $" + tenPer + " and your total is: $" + (totalAmnt - tenPer));
//     } else if (luckyNum === 2){
//         alert("Congrats, you won a 25% discount which is: $" + twentyFivePer + " and your total is: $" + (totalAmnt - twentyFivePer));
//     } else if (luckyNum === 3){
//         alert("Congrats, you won a 35% discount which is: $" + thirtyFivePer + " and your total is: $" + (totalAmnt - thirtyFivePer));
//     } else if (luckyNum === 4){
//         alert("Congrats, you won a 50% discount which is: $" + fiftyPer + " and your total is: $" + (totalAmnt - fiftyPer));
//     } else if (luckyNum === 5){
//         alert("Congrats, you won a 100% discount which is: $" + freePer + " and your total is: $" + (totalAmnt - freePer));
//     }
//
// }
//
//     calculateTotal(randomLuckyNum, 100);

/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 5.
 * (In this line of code, 0 is inclusive, and 6 is exclusive)
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6
// var luckyNumber = Math.floor(Math.random() * 6);

    //     EXERCISE 6
    //
    // var userDefinedTotal = prompt("Please enter you total bill.");
    // console.log("Total entered by user: $" + userDefinedTotal);
    //
    // calculateTotal(randomLuckyNum, userDefinedTotal);

/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * Do *NOT* display any of the above information
 * if the user enters a value that is not of the number data type.
 * Instead, use an alert to inform them of the incorrect input data type.
 *
 *
 * Can you refactor your code to use functions?
 * HINT: The way we prompt for a value could be improved
 */

// EXERCISE 7

    var userConfirm = confirm("Would you like to enter a number?");
    console.log(userConfirm);
    function enterANumber(){
        if (userConfirm === true) {
            prompt("Please enter a number?");
        } else {
            alert("OK, thanks for playing.")
        }
    }

    function alerts(num){
        return alert("")
    }

})();
