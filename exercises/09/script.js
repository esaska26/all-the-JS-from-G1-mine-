$(document).ready(function(){

let divID = $('#firstWrapper');
// console.log(divID); //first div

//paragraphInDiv class
let firstPara = $('.paragraphInDIV').first();
// console.log(firstPara);

let elemH1 = $('h1').first();
// console.log(elemH1);
$('h1').first().html('<h1> JQuery is awesome </h1>');
$('h1').after('<p>new paragraph after h1</p>');

let elemH3 = $('h3').first();
// console.log(elemH3);

let btn = $('button');
// console.log(btn);
$('button').css('background-color', 'red');

btn.click (function() {
    //secondWrapper
    $('#secondWrapper').hide();
    $('p').css('color', 'green');
    $('button').html("Don't click me");
});


btn.click (function() {
let input1 = parseInt($('input')[0].val());
let input2 = parseInt($('input')[1].val());
let input3 = parseInt($('input')[2].val());

let sum = input1 + input2 + input3;
let average = sum / 3;

$('h1').html(`${average}`);
if (average >= 10){

}

});


});