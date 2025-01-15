//06 exercises
//we want to select: app, title & content

let myApp = document.getElementById('app');
let titleDiv = myApp.firstElementChild;
let contentDiv = document.querySelector('#content');

let students = ["Bob Bobsky", "Jill Cool", "John Doe", "Jane Sky"];
let subject = ["Math", "English", "Science", "Sport"];
let grades = ["A", "B", "C", "A"];


//poednostaven pristap(example of a proper data):
/*let studentsObj = [
    {
        name: "Bob Bobsky",
        subjects: ["Math", "Sport"],
        grade: ["A", "A"]
    }, 
    {
        name: "Bob Bobsky",
        subjects: {
            name: "Math",
            grade: "A"
        }
    }
]*/

function printGrade(subject, grades, element/*kade sakame da go prikazheme*/){
    element.innerHTML = '';
    let content = '<ul>';//vikame kreiraj mi tag ul ama ne go zatvarame(ni treba otvoren)
    
    for (let i = 0; i < subject.legth; i++){
        content += `<li>${subject[i]}: ${grades[i]}</li>`;
    }

    content += '</ul>';//go zatvorivme tagot
    //console.log(content);
    element.innerHTML = content;

    //printGrades(subject, grades, contentDiv);
}
function printStudents(students, element){
    element.innerHTML = '';
    let content = '<ol>';
    for(let student of students){
        content += `<li>${student}</li>`;
    }
    content += '</ol>';
    element.innerHTML = content;
}
printStudents(students, contentDiv);

function academyPanel(person, name){
    if(person === 'student' && name.length >= 2){
        titleDiv.innerHTML = `<h1>Hello there ${name}</h1>`;//`` se vikaat interpulacija
        titleDiv.innerHTML += '<p>Welcome to your student page</p>';
        titleDiv.innerHTML += '<h3>Your grades:</h3>';
        printGrades(subject, grades, contentDiv);
    } else if(person === ' teacher' && name.length >= 2 /* od dva karakteri */){
        titleDiv.innerHTML = `<h1>Hello ${name}</h1>
        <p>Welcome to teachers page</p>
        <h3>Your students: </h3>`;
        printStudents(students, contentDiv);

    }
    else{
        titleDiv.innerHTML = "<h1><b>Your login was unsuccessfull</b></h1>";
        titleDiv.innerHTML += "<p>Please try again!</p>";
    }
}

let personType = prompt('Are you a student or a teacher?');
let name = prompt('What is your name?');

academyPanel(personType, name);

