function digitsInNumber(number){
    console.log(`Input number is: ${number}`)

    while(number > 0){
        let cifra = number % 10;
        console.log(cifra);

        number = parseInt(number/10);
        console.log(`Input: ${number}`);
    }
}

digitsInNumber(123456789);