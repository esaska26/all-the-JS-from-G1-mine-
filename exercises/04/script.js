// exercise 00 DONE
// let a = 7;
// let b = 8;
// let c = a + b;
// console.log(c);

// // exercise 01 DONE
// let int = 1;
// let bool = true;
// let string = "Nekoja recenica.";
// console.log(typeof(int));
// console.log(typeof(bool));
// console.log(typeof(string));

// //exercise 02 DONE
// let int1 = 10, int2 = 2;
// if(int1 > int2){
//     console.log(int1 + " is larger than " + int2)
// }
// else if(int1 < int2){
//     console.log(int2 + " is larger than " + int1)
// }
// else if(int1 = int2){
//     console.log(int1 + " and" + int2 + "have the same value")
// }
// else{
//     console.log("NaN");
// }

//exercise 03 DONE
// let int = 100;
// if(int >= 100){
//     console.log("The number is cool.")
// }
// else{
//     console.log("Not a cool number");
// }

// //exercise 04
// function string(c){
//     let a = c;
//     console.log(`The given argument was: ${a}, OK?`)
//     return a;
// }
// string(5);

// //exercise 05 DONE
// function vehicle(producer, model, horsepower = "N/A", color = "N/A"){
//     let a = producer, b = model, c = horsepower, d = color;
//     console.log(a + " " + b + " " + c + " " + d);
//     return a, b, c, d;
// }

// vehicle("this", 5);

//exercise 06 DONE
// function evenORodd(a){
//     if(a % 2 === 0){
//         console.log("even");
//     }
//     else if(a % 2 === 1){
//         console.log("Odd");
//     }
//     else{
//         console.log("NaN")
//     }
// }
// evenORodd(5);

//exercise 07

//exercise 10 DONE
// let num = 1;
// while(num <= 193){
//     if(num % 2 === 0){
//         num++;
//         continue;
//     }
//     console.log(num);
//     num++;
// }

//exercise 11 DONE
// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// function sumof(){
//     let sum = 0;
//     for(let n = 0; n < array.length; n++){
//     sum += array[n];
// }
// console.log(sum);
//     return sum;
// }
// sumof();

//exercise 12 DONE
// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// function avgValue(){
//     let sum = 0;
//     let avg;
//     for(let n = 0; n < array.length; n++){
//     sum += array[n];
//     avg = sum / array.length;
// }
//     console.log(avg);
//     return avg;
// }
// avgValue();

//exercise 13 DONE
// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// function evenORodd(){
//     for(let n = 0; n < array.length; n++){
//     if(array[n] % 2 === 0){//even
//         console.log("Even");
//     }
//     else if(array[names] % 2 === 1){//odd
//         console.log("Odd");
//     }
//     else{
//         console.log("NaN");
//     }
//     }
// }
// evenORodd();

//exercise 14 DONE
// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// // function something(){

// }

//exercise 15 DONE
// function arrayofNames(names){
//     let arr=[];
//     for (let name of names){
//         let length = name.length;
//         arr.push(length);
//     }
//     return arr;
// }
// let names = ["Ime1", "Imeeee"];

// let result = arrayofNames(names);
// console.log(result);

//exercise 16
function createARR(NewArray){
    let num = parseInt(prompt("Enter a num"));
    if(1 <= num <= 133){
        for(int n = 0; n < 133; n++){
            if((num / 7 || num / 3) && num ){
                break;
            }
        }
    }
    else{}
}

let result = createARR(NewArray);
console.log(result);

//exercise 17 DONE
// let correctnum = 1234;

// for(let n = 0; n < 4; n++){
// let input = parseInt(prompt("Guess num of four digits"));
// console.log(input);
// if(input === correctnum){
//     console.log("That was correct!");
//     break;
// }
// else if(input !== correctnum){
//     console.log("Sorry that was wrong.");
// }
// }

//exercise 18

// function takenum(X){

// }
// let input
// takenum();

