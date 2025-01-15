//object literal

let obj = {}; //empty object

//adding properties dot (.) notation
obj.firstName = 'Sashka';
console.log(obj.firstName);

//adding properties with square bracket notation

obj['lastName'] = 'Endrovska';

let obj2 = {
   title: 'Title',
   durration: 102,
   
   getTitle: function(){
    return this.title;
   }
}

obj2.getTitle();

//using new Object

let obj3 = new Object();
// we must always use square bracket or dot notation to add properties

obj3.firstName = 'Sashka';

obj3['lastName'] = 'Endrovska';

obj3.movieInfo = obj2;
console.log(obj3);

//Constructior function

function Student(firstName, lastName, dob, address, town){
    this.firstName = firstName;
    this.lastName = lastName;
    this.dateofbirth = dob;
    this.address = !address ? 'Unknown' : address; //dali e falsey vrednost, ako e true dodadi unknown adress
    this.town = town;

    this.getFullName = function(){
        return `${this.firstName} ${this.lastName}`;
    }
}

function getFullName(student){
    //validations
    return `${student.firstName} ${student.lastName}`;
}

let student  = new Student('Bob', 'Bobski', 1999);
let fullName = student.getFullName();
let fullName2 = getFullName(student);
let fullName3 = getFullName(obj); //prazen objekt

student['grades'] = [1, 2, 3, 4];
student.academy = {
    name: 'Q.A.',
    address: 'Random address',
    studentCapacity: 1001
}

//removing property from object
delete student.firstName;