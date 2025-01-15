let arr = [];
let arr1 = [1, 2, 3, 4, 5];//0, 1, 2, 3, 4
let names = ["Imence1", "Imence2"]

//get value
let element = arr1[1]; //koja niza i indeks za pristap
console.log(element);

//set value
arr1[1] = 101; //smenivme vrednost na indeks 1
console.log(arr1[1]);

let lengthOfArray = arr1.length;
console.log(lengthOfArray); // 5 elementi od nulta pozicija do 4
//length ja kazhuva dolzhinata na nizata

console.log(arr[100]); // undefined deka nashla neshto na taa pozicija

let numbers= [1, 2, 3, 4, 5];
numbers[numbers.length] = 6;
numbers[numbers.length] = 10;
console.log(numbers); //adding more elements
//output: (7) [1, 2, 3, 4, 5, 6, 10]

//adding element using push
numbers.push(101);

//adding elements using push
numbers.push(1, 2, 3);
console.log(numbers);
//(11) [1, 2, 3, 4, 5, 6, 10, 101, 1, 2, 3]

//adding elements at the beginning of the array using unshift
numbers.unshift(1234);
console.log(numbers);
//(12) [1234, 1, 2, 3, 4, 5, 6, 10, 101, 1, 2, 3]

numbers.unshift(200, 201, 202);
console.log(numbers);
//(15) [200, 201, 202, 1234, 1, 2, 3, 4, 5, 6, 10, 101, 1, 2, 3]

//removing elements from the end of the array
//you can only remove one element at a time
let lastElement = numbers.pop();
console.log(lastElement); //3
console.log(numbers); //(14) [200, 201, 202, 1234, 1, 2, 3, 4, 5, 6, 10, 101, 1, 2]

//removing elements from the beginning of the array
let firtsElement = numbers.shift();
console.log(firtsElement); //200
console.log(numbers); //(13) [201, 202, 1234, 1, 2, 3, 4, 5, 6, 10, 101, 1, 2]