// // let input = parseInt(prompt("Vnesi broj"));

// function convertToF(){
//     let result = (input1 * 1.8) + 32;
//     return result;
// }
// function convertToC(){
//     let result = (5 / 9) * (input1 - 32);
//     return result;
// }

// let fahrenheit = convertToF();
// console.log(fahrenheit);
// let celsius = convertToF();
// console.log(celsius);

// function convertTo(degrees, action){
//     if(action === "f"){
//         let result = convertToF(degrees);
//     }
//     else if(action === "c"){
//         let result = convertToC(degrees);
//         console.log(result);
//     }
// }

// let input1 = parseInt(prompt("Vnesi broj"));
// let input2 = prompt("Vnesi F ili C za konverzija");

// convertTo(input1, input2);

// ??


// function calculateAge(birthyear, currentyear){
//     let age = currentyear - birthyear;
//     console.log("You are " + age + " years old");
//     return age;
// }

// calculateAge(2002, 2024);


// function calculateAge(dob, currentYear){
//     return currentYear - dob;
// }

// console.log(`You are ${calculateAge(1991, 2024)} years old`);


function calculateAge2(dob){
    let date = new Date();
    let currentYear = date.getFullYear();
    return currentYear - dob;
}
console.log(`You are ${calculateAge2(2002)} years old`);

