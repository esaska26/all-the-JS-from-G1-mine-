/*1.1 Generate an array that has all the numbers that are divisible by 
3 from 1 to 1000

Generate an array that has all the even numbers that are divisible 
by 4 from 1 to 1000

Generate an array that has all the numbers that end with the digit 
1 from 1 to 1000*/ 

//1.1; 1.2; 1.3

// let number = [];

// for (let i = 1; i <= 1000; i++){
// //     number.push(i)
// // }

// function generateAllNumbersDivisableByThree(){
// let arr1 = [];
// for (let i = 1; i <= 1000; i++){
//     if (i%3 === 0){
//     arr1.push(i)
//     }
// }
// }

// function generateAllNumbersDivisableByFour(){
// let arr2 = [];
// for (let i = 1; i <= 1000; i++){
//     if (i%4 === 0){
//     arr2.push(i)
//     }
// }
// }
// function generateAllNumbersDivisableByOne(){
// let arr3 = [];
// for (let i = 1; i <= 1000; i++){
//     if (i%1 === 0){
//     arr3.push(i)
//     }
// }
// }
// let result1 = generateAllNumbersDivisableByThree();
// console.log(result1);
// let result2 = generateAllNumbersDivisableByFour();
// console.log(result2);
// let result3 = generateAllNumbersDivisableByOne();
// console.log(result3);

// function generateAllNumbersDivisableByFour(){
//     let arr = [];
//     let counter = 1;
//     while(counter <= 1000){
//         if(counter % 4 === 0){
//             arr.push(counter);
//         }
//         counter++;
//     }
//     return arr;
// }

// let result4 = generateAllNumbersDivisableByFour;
// console.log(result4);

// function generateAllNumbersDivisableByOne(){
//     let arr = [];
//     let i = 0;
//     do{
//         if(i % 10 === 1){
//             arr.push(i);
//         } 
//         i++
//     }while(i <= 1000)
//         return arr;
// }
// let result5 = generateAllNumbersDivisableByOne;
// console.log(result5);

//2.1; 2.2; 2.3

// let test = [true, false, 12, 13, 44, 2345, "Bob", "Jill", false, undefined, 1000, null, "Jack", "", "", 99, "Greg", undefined, NaN, 1, 22];

// function cleanArrayOnlyStrings(arr){
//     let cleanedArray = [];
//     for(let item of arr){
//         if(typeof item === 'string'){
//             cleanedArray.push(item);
//         }
//     }
//     return cleanedArray;
// }

// let result1 = cleanArrayOnlyStrings(test);
// console.log(result1);

// function cleanArrayOnOnlyNumbers(arr){
//     let cleanedArray = [];
//     for(let i = 0; i < arr.length; i++){
//         let element = arr[i];

//         if(typeof element === 'number' && !Number.isNaN(element)){
//             cleanedArray.push(element);
//         }
//     }
//     return cleanedArray;
// }

// let result2 = cleanArrayOnOnlyNumbers(test);
// console.log(result2);

// function cleanArrayOnOnlyThrutyValues(arr){
//     let cleanedArray = [];
//     let i  = 0;
//     while(i < arr.length){
//         let element = arr[i];
//         if(element){
//             cleanedArray.push(element);
//         }
//         i++
//     }
//     return cleanedArray;
// }

// let result3 = cleanArrayOnOnlyThrutyValues(test);
// console.log(result3);

//3.1; 3.2; 3.3

// function newColor(){
//     let symbols = '0123456789ABCDEF';
//     let color = '#';
//     for(let i = 0; i < 6; i++){
//         color = color + symbols[Math.floor(Math.random()*16)];
//     }
//     document.body.style.background = color;
//     document.getElementById('hex').textContent = color;
// }

//let rgb = Math.floor(Math.random() * 255); // ->234

function newColor(){
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);
    document.body.style.background = `rgb(${red}, ${green}, ${blue})`;
    document.getElementById('colorName').textContent = `rgb(${red}, ${green}, ${blue})`;
}

//4.1; 4.2; 4.3

//let color = prompt();
//let fontSize = prompt();
//let text = prompt();

//let titles = ["title1", "title2", "title3", "title4", "title5"];

// let btn = document.getElementById('titleGenerator');

// btn.addEventListener("click", function() {
// })

function generateH1Element(){
    let h1 = document.createElement('h1');
    return h1;
}

function getInputValues(){
    let inputs = document.getElementsByTagName('input');
    let result = {};
    for (let input of inputs){
        result [input.name] = input.value;
    }
    return result;
}

function generateH1(element){
    let values = getInputValues();
    let h1Element = generateH1Element();
    h1.style.color = values.color;
    h1Element.styke.fontSize = value.fontSize + 'px';
    h1Element.innerText = values.text;

    element.appendChild(h1Element);
}

document.getElementById('btn')
.addEventListener('click', function(){
    let contentDiv = document.getElementById('content');
    generateH1(contentDiv);
});

////constructor function

function Student(firstName, lastName, birthYear, academy, grades){
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthYear = birthYear;
    this.academy = academy ? academy : 'N/A';
    this.grades = grades ? grades : [];

    this.getAge = function(){
        let date = new Date();
        let currentYear = date.getFullYear();
        return currentYear - this.dateOfBirth;
    }

    this.getInfo = function(){
        let academyInfo = '';
        if (this.academy === 'N/A'){
            academyInfo = 'and its not apart of any academy'
        }
        else{
            academyInfo = `from the academy ${academy}`;
        }
        return `This is student ${firstName} ${lastName} from the academy ${academy}!`;
    }

    this.getGradesAverage = function(){
        if(this.grades.length === 0){
            return 0;
        }
        let average = 0;
        for(let grade of this.grades){
            average += grade;
        }
        return average / this.grades.length;
    }
}

let student1 = new Student('Name1', 'LastName1', 1995);
let student2 = new Student('Name2', 'LastName2', 1996);
let student3 = new Student('Name2', 'LastName2', 1997, 'QA', 1, 22, 234, 123);

for (let student of studentsArray){
    console.log('Student age: ' + student.getAge());
    console.log('Student info: ' + student.getInfo());
    console.log('Student average grades: ' + student.getGradesAverage());
}