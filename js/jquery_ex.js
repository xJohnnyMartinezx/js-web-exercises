"use strict";

$(function() {
    // alert('The DOM has finished loading!');
    // console.log("test");

    // #3
    // var contents = $("#para").html();
    // alert(contents);

//     #4
//     var contents = $("#item1").html();
//     alert(contents);

//     CLASS SELECTORS
//     $(".codeup").css('border', '1px solid #FF0000');

//     TAG SELECTORS
//     $("li").css('font-size', '20px').css( 'background-color', '#FFFF00');
//
//     $("p").css("background-color",  "#FFFF00");
//     $("h1").css("background-color", "#FFFF00");

//     COMBINED SELECTORS
//     $("li, p, h1").css("background-color", "#2fff00");


//     MOUSE EVENTS

    // SINGLE CLICK
    $('.title').click(function() {
        $('.title').css("background-color", "#2fff00")
    });

//     DOUBLE CLICK

    $('p').dblclick(function(e) {
        $('p').css('font-size', '18px');
        // this.css('font-size', '18px');

    });

//     MOUSE HOVER
//     $('li').hover( handlerIn, handlerOut );

    $('li').hover(
        function() {
            $(this).css('color', '#ff0000');
        },
        function() {
            $(this).css('color', '#000000');
        }
    );








});
