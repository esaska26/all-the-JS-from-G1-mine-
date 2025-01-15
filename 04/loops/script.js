let counter = 0;
while(counter < 10){
    console.log(counter);
    counter += 1;
}

let names = ["Imence1", "Imence2", "Imence3", "Imence4"];
let index = 0; //indeksot na prviot clen na nizata e nula ; brojac

while(index < names.length){
    console.log(names[index]);
    index += 1;
}

console.log("Outside of the loop");

//var ne se koristi povekje. Samo let i const (tip)

let numberOfValues = 10;
let counter1 = 0;
let values =[];

while (counter1 < numberOfValues){
    let input = prompt("vnesi vrednost");
    values.push(input);   
    counter1 += 1;
}
counter1 = 0;
console.log("Finished entering");

while (counter1 < values.length){
    console.log(values[counter1]);
    counter1 += 1;
}
console.log("Finished printing");

