"use strict";

// IIFE Function
(function (){

    function showMultiplicationTables(num){

        for (var i = 1; i <= 10; i++){
            console.log(num + " x " + i + " = " + (num * i));
        }

    }

    showMultiplicationTables(7);








})();