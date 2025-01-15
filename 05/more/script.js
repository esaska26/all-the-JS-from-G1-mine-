let index1 = 0;
while(index1 < 30){
    if(index1 % 3 === 0){
        index1++;
        continue;
    }//
    console.log(index1);
    index1++;
}

for(let index = 0; index < 30; index++){
    if(index % 3 === 0){
        continue;
    }
    console.log(index);
}

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let number of numbers){
    console.log(number);
    if (number === 11){
        break;
    }
}

