//07 cas
//DOM - document object model
//how to kill a child in js
//console.log(document);

//get element by id
let myHeader = document.getElementById('');
//console.log(myHeader);
//console.log(myHeader.text);

//selecting element by class name
let paragraphs = document.getElementsByClassName('myParagraph');
console.log(paragraphs);
let secondPara = document.getElementsByClassName('second');
console.log(secondPara);

//selecting element by tag name
let para = document.getElementsByTagName('p');
console.log(para);
let divs = document.getElementsByTagName('div');
console.log(divs);
let firstPara = para[0];
console.log(firstPara);

//query selectors (zamena za site tri funkcii)
//query by tag name
let paragraphs1 = document.querySelectorAll('p');
console.log(paragraphs1); //all gi zema site a bez all go zema toj prv shto ke go najde
let paragraphs2 = document.querySelector('p');
console.log(paragraphs2);
//query by class name
let text = document.querySelector('.second');
console.log(text);
//query by id name
let title = document.querySelector('#myTitle');
console.log(title);

//siblings
let firstParag = document.querySelector('#myTitle');
let nextSibling = firstParag.nextElementSibling;//nextelemsibling e property
console.log(nextSibling);
let prevSibling = nextSibling.previousElementSibling;
console.log(prevSibling);

//parent element
let parent = prevSibling.parentElement;
console.log(parent);

//getting the children of element
let children = parent.children;//parent ni e divot
console.log(children);
let firstChild = parent.firstElementChild;
console.log(firstChild);
let lastChild = parent.lastElementChild;
console.log(lastChild);

//get text content
let mainDiv = document.getElementById('main');
let divtextContent = mainDiv.textContent;
console.log(divtextContent);//celiot tekst kod go printa so textContent
let divInnerText = mainDiv.innerText;
console.log(divInnerText);//tekstot e zalepen za krajot(levo)

//changing text
let mainHeader = document.getElementById('myTitle');
mainHeader.innerText = "Hooray we added text with javascript";
//smenivme tekst na h1(main header)
mainHeader.innerText = "New Text";//changed it again

mainHeader.innerText = mainHeader.innerText + " Ultra new text";
mainHeader.innerText += " Short Variant";

//adding html
//wrong way, innerText is only used for changing text
mainHeader.innerText = "<p> Text </p>";//inner tekst znaci deka gleda samo tekst a ne html

let divMain = document.getElementById('main');
console.log(divMain.innerHTML);//ni go vrakja cel html shto go imame vo main(div)
//ova e string reprezentacija, ne mozheme nishto da mu pravime

divMain.innerHTML = '<p id = "firstParagraph">First html element added with javascript</p>';//tuka mozheme html da pishuvame
//kucame string, i pazime na najmali greshki vo htmlot deka nemame assist
//vikame prebrishi sE shto imash vo toj html i smeni go so ovoj.

/*divMain.innerHTML = '';*///ova ke izbrishe sE shto ima vo divot i posle mozesh da dodavash raboti


//changing style
let divMainDiv = document.getElementById('main');

divMainDiv.style.color = 'red';
// divMainDiv.style.backgroundColor = 'blue';
// divMainDiv.style.display = 'none';

divMainDiv.classList.add('bg.color');//dodavash klasa
divMainDiv.classList.add('bg.color', 'test1', 'test2');
