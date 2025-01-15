//kreirame konstruktor funkcija
//constructor function (models)
function ToDo(id, title, description){
    this.id = id;
    this.title = title;
    this.description = description;
    this.isComplete = false;
}


//global variables
let todoInMemory = {
    todos: [],
    todoIdCounter: 1
};

let todos = [];
let todoIdCounter = 1; //ke bide id na sekoe to-do

let form = document.getElementById('add-todo-form');

//functions
function createToDo(title, description){
    let todo = new ToDo(todoInMemory, title, description);
    todoIdCounter += 1;
    todoInMemory();
    return todo;
}

function resetInputs(parentElement){
    let inputs = parentElement.getElementsByTagName('input');
        for(let input of inputs){
            input.value = '';
        }
}

function getValuesFromInputs(parentElement){
    let inputs = parentElement.getElementsByTagName('input');
        // //kreirame objekt da gi dodademe site tie raboti
        // let todo = new ToDo(todoIdCounter);
        // todoIdCounter++;

        let inputValues = {};
        for(let input of inputs){
            inputValues[input.name] = input.value;
        }
        return inputValues;
}

function showHideElement(element, isHidden){
    // if (isHidden){
    //     element.style.display = 'none';
    // }
    // else{
    //     element.style.display = 'block';
    // }
    //isti se i gore i dole
    element.style.display = isHidden ? 'none' : 'block'; //true then, false then;
}

//events
document.querySelector('#add-todo')
    .addEventListener('click', function(){
        showHideElement(form, false);
        form.style.display = 'block';
    });

document.getElementById('reset-todo')
    .addEventListener('click', function(){
        resetInputs(form);
    });

document.getElementById('save-todo')
    .addEventListener('click', function(){
        let inputValues = getValuesFromInputs(form);
        let todo = createToDo(inputValues.title, inputValues.description);
        todoInMemory.todos.push(todo);
        resetInputs(form);
        form.style.display = 'none';
        console.log(todoInMemory.todos);
        showHideElement(form, true);
    });

    //negde fali neshto deka brzashe na kraj i ne se gleda
    //dopolni