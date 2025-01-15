// debugger;
// function welcomeMessage(firstName, lastName){
//     console.log(` Welcome ${firstName} ${lastName} `);
// }

// let name = "Ime";
// let surname = "Prezime";

// welcomeMessage(name, surname);


// function trojstvo(ime, god, message){
//     console.log(`I'm ${ime} and i'm ${god} old, ${message}`)
// }

// let name = "Jane";
// let age = "34";
// let mess = "Hey";


// trojstvo(name, age, mess);

// function sum(num, num1){
//     let result = num + num1;
//     console.log(result); 
//     return result;
// }


// // let sumof2 = sum(15, 11);
// sum(15, 11);

// function sum(x, y){
//     let sum = x + y;
//     console.log(sum);
//     return sum;
// }
// function sub(x, y){
//     let sub = x - y;
//     console.log(sub);
//     return sub;
// }
// function mult(x, y){
//     let mult = x * y;
//     console.log(mult);
//     return mult;
// }
// function div(x, y){
//     if( y >0 ){
//     let div = x / y;
//     console.log(div);
//     return div;
//     }
//     else{
//         console.log("Illogical");
//     }
// }

// let sum2 = sum(10,2);
// let sub2 = sub(10,2);
// let mult2 = mult(10,2);
// let div2 = div(10,0);


// let input = prompt ("Enter Name");
// let message = 'Hello ${input}, how are you?' ;
// alert(message);



// let message = "Please enter a message: ";
// let input = prompt(message);
// let parsedInput = parseInt(input);

// if (typeof(parsedInput) === 'number' && !Number, isNaN(parsedInput)){
//     return parsedInput;
// }
// else{
//     return NaN;
// }

function  parseInputInteger(message){
// let message = "Please enter a message: ";
let input = prompt(message);
let parsedInput = parseInt(input);

if (typeof(parsedInput) === 'number' && !Number, isNaN(parsedInput)){
    return parsedInput;
}
else{
    return NaN;
}
}

let input1 = parseInputToInteger("Please enter a number:");
let input2 = parseInputToInteger("Vnesete broj:");
let input3 = parseInputToInteger("Vnesete ime:");

console.log(input1);
console.log(input2);
console.log(input3);