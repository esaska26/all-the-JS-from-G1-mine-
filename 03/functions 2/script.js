function sum(x, y){
    let sum = x + y;
    console.log(sum);
    return sum;
}
function sub(x, y){
    let sub = x - y;
    console.log(sub);
    return sub;
}
function mult(x, y){
    let mult = x * y;
    console.log(mult);
    return mult;
}
function div(x, y){
    if( y >0 ){
    let div = x / y;
    console.log(div);
    return div;
    }
    else{
        console.log("Illogical");
    }
}

function advCalculator(num, num1, operation){
    if(operation === "+"){
        let suma = sum(num, num1);
        return suma;
    }
    else if(operation === "-"){
        let subs = sub(num, num1);
        return subs;
    }
    else if(operation === "*"){
        let mlp = mult(num, num1);
        return mlp;
    }
    else if(operation === "/"){
        let divi = div(num, num1);
        return divi;
    }
    else{
        return null;
    }
}

// let sum2 = sum(10,2);
// let sub2 = sub(10,2);
// let mult2 = mult(10,2);
// let div2 = div(10,0);
advCalculator(10, 5, "+");
advCalculator(10, 5, "-");
advCalculator(10, 5, "*");
advCalculator(10, 5, "/");

//wrong