//nizi

let arr = [];

let arr1 = [1, 'Sashka', [1, 2, 3], {firstName: 'Sashka'}];

let result = ['Sashka', 'Endrovska', 23];
let firstName = result[0];
let lastName = result[1];
let age = result[2];

let arrayOfNumbers = [1, 2, 3, 4 , 5, 6, 7, 8, 9];
let arrayOfStudentGrades = [
    {
        name: 'Sashka',
        grades: [1, 2, 3, 4 , 5, 6]
    },
    {
        name: 'Sashka',
        grades: [1, 2, 3, 4 , 5, 6]
    },
    {
        name: 'Sashka',
        grades: [1, 2, 3, 4 , 5, 6]
    }
];

function getStudent(){
    let name = 'Sashka';
    let age = 21;
    let address = 'N/A';
    
    return [name, age, address];
}

//get value
let secondElement = arrayOfStudentGrades[1];
console.log(secondElement);

//set value
arrayOfStudentGrades[3] = {
    name: 'Filip',
    grades: [1, 2, 3, 4, 5, 6, 7, 8, 9]
}
console.log(arrayOfStudentGrades);

arrayOfStudentGrades[arrayOfStudentGrades.length] = {
    name: 'Bob',
    grades: [1, 3, 4]
}
console.log(arrayOfStudentGrades);

//add element at the end using push
//adding one element (also this is an object)
arrayOfStudentGrades.push({
    name: 'Jill',
    grades: [1]
});

//adding more elements
arrayOfStudentGrades.push(
{
    name: 'Jill1',
    grades: [1, 2]
},
{
    name: 'Jill2',
    grades: [3, 1]
}
);

//adding elements in front of the array
arrayOfStudentGrades.unshift({
    name: 'Bob1',
    grades: [1]
})

//removing element from the end of the array
let lastElement = arrayOfStudentGrades.pop();
//removing element from the start of the array
let firstElement = arrayOfStudentGrades.shift();


