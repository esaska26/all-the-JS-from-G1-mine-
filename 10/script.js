$(document).ready(function(){
    
// let el = document.getElementById('some id'); //vanila js
let el = $('#mainTitle');
console.log(el);
let allElements = $('*');
// console.log(allElements);

let elbyclassname = $('.innerWrapper');
// console.log(elbyclassname);

let elbytagname = $('p');
// console.log(elbytagname);

let elebymultselectors = $('.innerWrapper, .wrapper, #mainTittle');
// console.log(elebymultselectors);

document.getElementsByTagName('p')[0];
let firstParagraph = $('p:first');
// console.log(firstParagraph);

let lastParagraph = $('p:last');
// console.log(lastParagraph);

let firstChildren = $('h3:first-child');
// console.log(firstChildren);

let lastChildren = $('h3:last-child');
// console.log(lastChildren);

let nthChild = $('p:nth-child(2)');
// console.log(nthChild);

let btn = $('button[name="test"]');
// console.log(btn);

let allParagraphs = $('p');
let first = allParagraphs.first();
// console.log(first);

let pclass = $('*').find('.innerWrapper').find('.pclass');
// console.log(pclass);

let pclass1 = $('*').find('.pclass');
// console.log(pclass1);

let allEle = $('*');
let fifthElement = allEle.get(5);
// console.log(allEle);
// console.log(fifthElement);
let nextElement = fifthElement.next; 

// let value = $('input[value = "Cool"]').val();
let value = $('input').first().val();
// console.log(value);

$('#mainTitle').hide();
$('#mainTitle').show();

let divHTML = $('.innerWrapper').first().html();
// console.log(divHTML);
$('.innerWrapper').first().html('<p>Changess</p>');

// let h1TEXT = $('#mainTitle').first().text();
// console.log(h1TEXT);
// $('#mainTitle').first().text('<p>Changess</p>');

let color = $('#mainTitle').css('color');
// console.log(color);
$('#mainTitle').css('color', 'violet');

$('.innerWrapper').find('p:first').after('<p>change after</p>');

// let ourBtn = $('button').first();
// outBtn.on('click', function(){
//     console.log('Hello from the first click handler!');
// });

let input = $('input').first();

input.on('keypress', function(){
    console.log('on key press');
});

input.change(function(e){
    console.log(e.target.value);
});


});