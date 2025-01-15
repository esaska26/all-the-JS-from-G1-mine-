let name = "Imence";

function printMessage(){
    let message = "Hello world"
    console.log(name);
}//lokalna promenliva za ovaa funkcija

printMessage();


function sum(num, num1){
    return num + num1;
}

//GLOBAL SCOPE

let globalVariable = 1;

function localScope(){
    //  function scope  
    let functionLocalScopeVariable1 = 2;

    if (true){
        //first if scope
        let ifVariable = 3;
    }

    if (true){
        //second if scope
        let secondifScopeVariable = 4;
    }
}
console.log("Global scope");
console.log(globalVariable);
console.log("Function scope");
console.log(functionLocalScopeVariable1);
console.log("First if scope");
console.log(ifVariable);
console.log("Second if scope");
console.log(secondifScopeVariable);