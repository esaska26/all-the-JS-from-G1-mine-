function digitsInNumber(number){

}

let counter = 0;
do{
 counter++;
 console.log(counter);
}while(counter < 10)

for(let i = 0; i < 10; i++){//i++ / i = i + 5/ i+=5
    console.log(i);
}

let index = 0;
while(index < 10){
    index++;
}

let days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

for(let i = 0; i < days.length; i++){
    let element = days[i];
    console.log(element)
}

for (let i = days.length - 1; i >= 0; i--){
    let element = days[i];
    console.log(element);
}

let days1 = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

for(let day of days1){//zemi go sekoj element od nizata days1
    console.log(day);
}

for(let i = 0; i < 20; i++){
    if (i > 10){
        break;
    }//koga ke dojde i > 10, zastani. a megjuvremeno ja vrshi funkcijata console.lo
    console.log(i);
}
//continue - skoka iteracii(loops)
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