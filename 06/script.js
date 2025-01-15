//objects
let obj = {};//empty objest literal:
let hotel = {
    name: "Quay", //name e klucot, quay e vrednosta; property key
    rooms: 30,
    booked: 25,
    hasGym: true,
    roomTypes: ["single", "double", "suite"],

    checkAvailability: function(){//method key
        console.log("Sorry, we are booked.");
    }
};

console.log(hotel.booked);
console.log(hotel.checkAvailability);
console.log(hotel.hasGym);
console.log(hotel.roomTypes);

let name = hotel.name;
let rooms = hotel["rooms"];
console.log(rooms);
hotel['checkAvailability']();//so () deka e metoda

let propertiesForReview= ['name', 'hasGym', 'roomTypes'];

for(let prop of propertiesForReview){
    console.log(hotel[prop]);
    console.log(`Key: ${prop} Value: ${hotel[prop]}`);
}


let hotel1 = {
    name: 'Another hotel',
}

let hotel3 = {};
let hotel2 = new Object();

hotel2.nam = 'Quay';
hotel2.rooms = 50;
hotel2.hasGym = false;
hotel2. roomTypes = ["single"];
hotel2.checkAvailability = function(){
    console.log("Only single rooms available");
}

hotel2['pricePerNight'] = 100;
hotel2.propertyForDelete = true;

console.log(hotel1);
console.log(hotel2);
console.log(hotel2.propertyForDelete);//undefined
console.log(hotel3);

delete hotel2.propertyForDelete;//brishi da ne postoi (ne e preporacano za korist)

let person = {
    firstName: "Ime1",
    lastName: "Prezime1"
};

person.firstName = "Ime2"; //dot notation
person['lastName'] = "Prezime2"; //square bracke notation
person.age = 25;

console.log(person);
console.log(person.firstName);

//pravime shablon koj kreira objekti i ne sodrzhi nishto

let hotel4 = new Object(); //object ima prazen objekt

function Hotel(name, rooms, booked){
    this.name =  name;
    this.rooms = rooms;
    this.booked = booked;

    this.checkAvailability = function(){
        return this.rooms - this.booked;
    }
}
//kodot se povikuva so "new" klucnoto zborce (key)

let hotel5 = new Hotel('Holday Inn', 100, 89);
let hotel6 = new Hotel('Meriot', 200, 200);
let hotel7 = new Hotel ('Park', 20, 10);

console.log(hotel5);
console.log(hotel6);
console.log(hotel7);

console.log(hotel5['checkAvailability']());
console.log(hotel6['checkAvailability']());
console.log(hotel7['checkAvailability']());
