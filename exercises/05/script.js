//exercise 1 & 2:
let me = {
    name: "Sashka",
    age: 22,
    haslonghair: true,
    pet: "cat",
    likes: "animals",

    talk: function(){
        console.log("Yappa Yappa");
    }
};

me.name = "Samuel";
me['pet'] = "parrot";
me['likes'] = "plants";
me.haslonghair = false;

console.log(me.name);
console.log(me.age);
console.log(me.haslonghair);
console.log(me.pet);
console.log(me.likes);
console.log(me.talk);

//exercise 3:

let trainer = {
    name: "Stefan",
    lastName: "Stefanovski",
    academy: "SEDC",
    lecture: "Objects"
}

trainer.age = 22;
delete trainer.lecture;
console.log(trainer);
console.log(trainer.lecture);
console.log(trainer.age);

//exercise 4:

let car = {
    model: "Ferrari",
    color: "red",
    year: "1968",
    fuel: "Diesel",
    fuelConsumption: 100,
    distance: 60,

    fuelSupply: function(){
        console.log(this);
        return this.distance * (this.fuelConsumption/100);
    }

    // method for calculation how much fuel will need to pass distance.
    // return distance * (this.fuelConsumption/100);
}

console.log(car);
console.log(car['fuelSupply']());