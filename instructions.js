Instructions

1. install node and npm
2. change directory to project
3. npm init - this will create a package.json 
4. npm install babel-cli -D    (-D is for dependency)
5. nam install babel-preset-env -D
6. touch .babelrc

ON A NEW Envirominet, npm i to folder to install node before build

{
  "presets": ["env"]
}

7. 

add 

"scripts": {
  "test": "echo \"Error: no test specified\" && exit 1",
  "build": "babel src -d lib"
}



npm run build




//iterators/////////////////////////////////////////////

let artists = ['Picasso', 'Kahlo', 'Matisse', 'Utamaro'];

artists.forEach(function(artist) {
  console.log(artist + ' is one of my favorite artists.');
});

groceries.forEach(groceryItem => console.log(' - ' + groceryItem));


let numbers = [1, 2, 3, 4, 5];

let squareNumbers = numbers.map(function(number) {
  return number * number;
});

let smallNumbers = bigNumbers.map(num => num/100);

console.log(squareNumbers);

let things = ['desk', 'chair', 5, 'backpack', 3.14, 100];

let onlyNumbers = things.filter(function(thing) {
  return typeof thing === 'number';
});

let longFavoriteWords = favoriteWords.filter(word=>word.length > 7);

console.log(onlyNumbers);

//Transpilation with Babel
//1 create package.json in folder in terminal if node is installed
npm init

//2 install babel   -D makes this a dependant module when someone else runds package.json build

npm install babel-cli -D
npm install babel-preset-env -D

//3 creates babelrc

touch .babelrc

//4 add presets

{
  "presets": ["env"]
}

//5 add script build to main js

"scripts": {
  "test": "echo \"Error: no test specified\" && exit 1",
  "build": "babel src -d lib"
}

//npm run build

//gitingnore file in main directory to ignore node modules
.gitignore 

//run program
node lib/minesweeper.js



//Control Flow 

//ternary statement
condition ? console.log('something with string interpolation') : console.log('something with no string interpolation');





//Objects this keyword/////////////

let person = {
  name: 'Tyron',
  age: 40,
  weekendAlarm: 'No alarms needed',
  weekAlarm: 'Alarm set to 7AM',
  
  sayHello() {
    return `Hello, my name is ${this.name}`;
  },
  
  sayGoodbye() {
    return 'Goodbye!';
  }
  
};

console.log(person.sayHello());

person.hobbies = ['Basketball', 'Coaching'];
person.hobbies = ['Basketball'];
console.log(person.hobbies);


console.log(person['name']);
console.log(person['age']);

let day = 'Tuesday';
let alarm;

if (day === 'Saturday' || day === 'Sunday' ) {
  alarm = 'weekendAlarm';
} else {
  alarm = 'weekAlarm';
}

console.log(person[alarm]);

//lending method to another Object////////////////////
let friend = {
  name: 'Rico',
};


friend.sayHello = person.sayHello;


console.log(friend.sayHello());


//getters and setters///////////////////////////

let person = {
  _name: 'Lu Xun',
  _age: 137,
  
  set age(age) {
     if (typeof age === 'number') {
        this._age = age;
     } else {
       return 'Invalid input';
     }
  }

};


//using the setters

person.age = 'Thirty-nine';
person.age = 39;



///GETTER method in use


let person = {
  _name: 'Lu Xun',
  _age: 137,
  
  set age(age) {
     if (typeof age === 'number') {
        this._age = age;
     } else {
       return 'Invalid input';
     }
  },
  
  get age() {
      //console.log(`${this._name} is ${this._age} years old.`);
      return this._age;
  }

};


person.age = 'Thirty-nine';
person.age = 39;

console.log(person.age);




//Classes/////////////////////////////////////////
class Surgeon {
  constructor(name, department) {
    this._name = name;
    this._department = department;
    
    this._remainingVacationDays = 20;
  }
  
  get name() {
    return this._name;
  }
  
  get department() {
    return this._department;
  }
  
  get remainingVacationDays() {
    return this._remainingVacationDays;
  }
  
  takeVacationDays(daysOff) {
    this._remainingVacationDays = this._remainingVacationDays - daysOff;
  
  }
  
}

const surgeonCurry = new Surgeon('Curry', 'Cardiovascular');
const surgeonDurant = new Surgeon('Durant', 'Orthopedics');


console.log(surgeonCurry.name);

surgeonCurry.takeVacationDays(3);

console.log(surgeonCurry.remainingVacationDays);


//Inheritance/////////////

class HospitalEmployee {
  constructor(name) {
    this._name = name;
    this._remainingVacationDays = 20;
  }
  
  get name() {
    return this._name;
  }
  
  get remainingVacationDays() {
    return this._remainingVacationDays;
  }
  
  takeVacationDays(daysOff) {
    this._remainingVacationDays -= daysOff;
  }
}

class Nurse extends HospitalEmployee {
  constructor(name, certifications) {
    super(name);
    this._certifications = certifications;
  }
  
  get certifications(){
    return this._certifications;
  }
  
  addCertification(newCertification) {
    this._certifications.push(newCertification);
  }
}

const nurseOlynyk = new Nurse('Olynyk', ['Trauma','Pediatrics']);
nurseOlynyk.takeVacationDays(5);

console.log(nurseOlynyk.remainingVacationDays);

nurseOlynyk.addCertification('Genetics');
console.log(nurseOlynyk.certifications);





//Static method

class Animal {
  constructor(name) {
    this._name = name;
    this._behavior = 0;
  }

  static generateName() {
    const names = ['Angel', 'Spike', 'Buffy', 'Willow', 'Tara'];
    const randomNumber = Math.floor(Math.random()*5);
    return names[randomNumber];
  }
}


console.log(Animal.generateName()); // returns a name

const tyson = new Animal('Tyson'); 
tyson.generateName(); // TypeError



//Modules//////////////////////////////////
let Menu = {};
Menu.specialty = "Roasted Beet Burger with Mint Sauce";

module.exports = Menu;


//Getting module in another file

const Airplane = require('./1-airplane.js');

function displayAirplane() {
  console.log(Airplane.myAirplane);
}

displayAirplane();




let Airplane = {};

module.exports = {
  myAirplane: "CloudJet",
  displayAirplane: function(){
    return this.myAirplane;
  }
};



//ES6 modules export syntax

let Menu = {};

export default Menu;

const Airplane = require('./2-airplane.js');

console.log(Airplane.displayAirplane());


///////////////////////////////////////
let Airplane = {
  
  availableAirplanes: [
    
     {
      name: 'AeroJet',
      fuelCapacity: 800
     }, 
     {name: 'SkyJet',
      fuelCapacity: 500
     }
    
  ],
  
  
};

export default Airplane;


///////////////////////////////////////
import Airplane from './airplane';

function displayFuelCapacity(){
  Airplane.availableAirplanes.forEach(function(element){
    
    console.log('Fuel Capacity of ' + element.name + ': ' + element.fuelCapacity);
  });
}


displayFuelCapacity();


/////////////////////////////////////////////

let availableAirplanes = [{
 name: 'AeroJet',
 fuelCapacity: 800,
 availableStaff: ['pilots', 'flightAttendants', 'engineers', 'medicalAssistance', 'sensorOperators'],
}, 
{name: 'SkyJet',
 fuelCapacity: 500,
 availableStaff: ['pilots', 'flightAttendants']
}];

let flightRequirements = {
  requiredStaff: 4,
};

function meetsStaffRequirements(availableStaff, requiredStaff) {
  if (availableStaff.length >= requiredStaff) {
    return true;
  } else {
    return false;
  }
};

export { availableAirplanes, flightRequirements, meetsStaffRequirements};

////////////////////////////////////////


import {availableAirplanes, flightRequirements, meetsStaffRequirements} from './airplane';

function displayFuelCapacity() {
  availableAirplanes.forEach(function(element) {
    console.log('Fuel Capacity of ' + element.name + ': ' + element.fuelCapacity);
  });
}

displayFuelCapacity();

function displayStaffStatus() {
  availableAirplanes.forEach(function(element) {
   console.log(element.name + ' meets staff requirements: ' + meetsStaffRequirements(element.availableStaff, flightRequirements.requiredStaff) );
  });
}

displayStaffStatus();


/////////////////

export let availableAirplanes = [{
 name: 'AeroJet',
 fuelCapacity: 800,
 availableStaff: ['pilots', 'flightAttendants', 'engineers', 'medicalAssistance', 'sensorOperators'],
  maxSpeed: 1200,
  minSpeed: 300
}, 
{name: 'SkyJet',
 fuelCapacity: 500,
 availableStaff: ['pilots', 'flightAttendants'],
 maxSpeed: 800,
 minSpeed: 200
}];

export let flightRequirements = {
  requiredStaff: 4,
  requiredSpeedRange: 700
};

export function meetsStaffRequirements(availableStaff, requiredStaff) {
  if (availableStaff.length >= requiredStaff) {
    return true;
  } else {
    return false;
  }
};

export function meetsSpeedRangeRequirements(maxSpeed, minSpeed, requiredSpeedRange){
  let range = maxSpeed - minSpeed;
  
   if (range > requiredSpeedRange) {
    return true;
    } else {
    return false;
  }
}


