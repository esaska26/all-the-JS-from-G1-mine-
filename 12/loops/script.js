let counter = 0;
while (counter <= 10){
    console.log(counter);
    counter++;
}

let arrOfNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
let index = 0;

let hasNumberDivisableBySeven = false;

while(!hasNumberDivisableBySeven){
    let element = arrOfNumbers[index];
    console.log(element);
    if(element % 7 === 0){
        hasNumberDivisableBySeven = true;
    }
    index++;
}

let input = ''; //prazen string
console.log('FirstCheck');
while(input !=='y'){
    console.log('Prompt');
    input = prompt('Enter y to exit the loop');
    console.log('AfterCheck');
}

//isto e kako gornoto
let input1 = '';
do{
    console.log('Prompt');
    console.log('FirstCheck');
    input1 = prompt('Enter y to exit the loop');
}while(input1 !=='y')
console.log('AfterCheck');

for(let i = 0; i <= 10; i++){
    console.log(i);
}

for(let i = 10; i>= 0; i--){
    console.log(i);
}

//bad example:
let brojac = 0;
for(brojac; brojac <= 10; brojac++){

}//ako brojac definirash vo for, ke postoi samo dodeka for ciklusot a aktiven, so toa shto sme deklarirale nadvor od ciklusot, pretstavuva problem.

let numbers = [1, 2, 3, 4, 5, 6];

let sum = 0;
for(let number of numbers){
    sum += number;
}
let average = sum / numbers.length;
console.log(sum);
console.log(average);
