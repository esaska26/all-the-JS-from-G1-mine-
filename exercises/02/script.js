// C to F => xC * 1.8 + 32
//F to C => (5/9) * (F-32)

let num = prompt("Temperature");
let letter = prompt("Temp name");

function convert(){
    // let fahrenheit = num * 1.8 + 32
    if (letter === "C"){
        let fahrenheit = num * 1.8 + 32;
        console.log(fahrenheit);
        return fahrenheit;
    }
    else if (letter === "F"){
        let celsius = (5 / 9) * (num - 32);
        console.log(celsius);
        return celsius;
    }
}

convert();
