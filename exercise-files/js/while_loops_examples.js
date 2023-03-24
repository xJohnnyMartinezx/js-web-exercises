// IIFE
(function () {

    //  WHILE LOOPS
    var i = 0;

    while (i < 10){
        console.log("While loop iteration #" + i);
        i++;
    }


    // vvv *** WILL NEVER BE EXECUTED BECAUSE j IS NEVER LESS THAN 10 *****
    var j = 10;

    while (j < 10) {
        console.log('while loop iteration #' + j);
        j++;
    }

//     DO WHILE LOOPS
//     A do-while loop is only different from a while in that the condition is evaluated at the end of the loop instead of the beginning. For example:
//
//         Syntax:
//
//
//             do {
//                 //body
//             } while(/*condition*/);

    // ****** "do" IS EXECUTED ONCE, BEFORE CHECKING IF CONDITION IS TRUE.*******
    var a = 10;

    do {
        console.log('Line 34: while loop iteration #' + a);
        a++;
    } while (a < 10);


//     FOR LOOPS
//     A for loop is a robust looping mechanism available in many programming languages. JavaScript's implementation syntax matches that of many other languages.
//
//     Basic For Loop Syntax
//     Syntax:
//
//
//         for (/*initialization*/; /*condition*/; /*increment*/) {
//             // body
//         }

    for (var b = 0; b < 10; b++){
        console.log("for loop iteration #" + b);
    }

    for (var c = 0, d = 9; c < 10; c++, d--) {
        console.log('for loop iteration #' + c + ', d = ' + d);
    }


//     Breaking Out of a Loop

    // Sometimes, a condition independent of the loop condition will occur that gives reason to exit the loop.
    // The break keyword allows you to exit the loop at any time.
    // Code execution in the loop will immediately be halted and the loop will not continue.
    //
    // Here is an example:
    //
    //
    //     var numberToStopAt = 5;
    //
    // for (var i = 1; i < 100; i++) {
    //
    //     console.log('Loop counter is: ' + i);
    //
    //     if (i === numberToStopAt) {
    //         console.log('We have reached the stopping point: break!');
    //         // use the break keyword to exit from the while loop
    //         break;
    //         // nothing after the break will get processed
    //         console.log('You will never see this line.');
    //     }
    // }
    // In the above example, even though our for loop is setup to go from 1 to 100,
    // we will only see the first 5 numbers in the console because the code will encounter a break statement when i reaches 5,
    // stopping the execution of the loop.
    //
    //     Although a for loop was used as an example, break works the same way with a while loop.

    var numberToStopAt = 5;

    for (var g = 1; g < 100; g++) {

        console.log('Loop counter is: ' + g);

        if (g === numberToStopAt) {
            console.log('We have reached the stopping point: break!');
            // use the break keyword to exit from the while loop
            break;
            // nothing after the break will get processed
            console.log('You will never see this line.');
        }
    }

    // Continuing the Next Iteration of a Loop
    // Besides breaking out of a loop, sometimes conditions occur that give reason to skip
    // to the next loop iteration without completing the entire loop code block.
    // The continue keyword provides this functionality.
    //
    //
    // 'use strict';
    //
    // for (var i = 1; i < 100; i++) {
    //
    //     if (i % 2 !== 0) {
    //         // number isn't even
    //         // odd numbers aren't as cool
    //         // skip the rest of the loop and continue with the next iteration
    //         continue;
    //     }
    //
    //     console.log('Here is a lovely even number: ' + i);
    // }
    // Like the break example, our loop is made to go from 1 to 100, but we will only ever see even numbers printed to the console.
    // If the number is odd, the code will encounter the continue statement and skip to the next iteration.
    //
    //     Again, although a for loop was used as an example, continue works the same way with a while loop.


    'use strict';

    for (var h = 1; h < 100; h++) {

        if (h % 2 !== 0) {
            // number isn't even
            // odd numbers aren't as cool
            // skip the rest of the loop and continue with the next iteration
            continue;
        }

        console.log('Here is a lovely even number: ' + h);
    }














})();