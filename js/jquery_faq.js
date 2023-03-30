"use strict";

$(document).ready(function (){


    $("body > dl > dd").addClass("invisible")

    $(".invisible").text()

    $(".invisible").css("visibility", "hidden")


    $("#toggle").click(function () {

        if ($(".invisible").attr("style")) {
            $(".invisible").removeAttr("style")
        }else {$(".invisible").css("visibility", "hidden")}

    })

    let turtleImg = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSePHvWxVaNNVnu3eXuBSp-ln1wYxNdTpQFkOBRvbwpd4sLXNV7WqioDQ9-vALhC6XNT1w&usqp=CAU";


    $("#list-items").click(function () {
        $( "dd:nth-of-type(2)" ).css("content", 'url(' + turtleImg + ')')
            .addClass( "nth" );
    })





})