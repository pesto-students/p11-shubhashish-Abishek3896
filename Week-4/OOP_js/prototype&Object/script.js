//Protecting the Object
const person = {
  name: 'Myname',
  age: 24,
  email: 'ab@hopmail.com',
};
Object.defineProperty(person, 'name', {
  value: 'Myname',
  writable: false,
});
Object.defineProperty(person, 'email', {
  value: 'ab@hopmail.com',
  writable: false,
});
Object.defineProperty(person, 'age', {
  value: 24,
  writable: true,
});
const getAge = ({ name, age, email }) => {
  return age;
};
const setAge = age => {
  person.age = age;
};

//JavaScript Prototype

class Vehicle {
  constructor() {
    this.make = 'Honda';
    this.model = 'Civic';
    this.year = 1964;
  }
  getDetails() {
    return `The Vehicle's make is ${this.make} model is ${this.model} and year is ${this.year}`;
  }
}

class Car extends Vehicle {
  constructor() {
    super();
    this.numDoors = 4;
  }
  getDetails() {
    return `The Vehicle's make is ${this.make} model is ${this.model} and year is ${this.year} and has ${this.numDoors} doors`;
  }
}
// const Vehicle = {
//   make: 'Honda',
//   model: 'Civic',
//   year: 1964,
// };

// const getDetails = () => {
//   return `The Vehicle's make is ${Vehicle.make} model is ${Vehicle.model} and year is ${Vehicle.year}`;
// };
// Vehicle.__proto__ = { getDetails };
// getDetails.Prototype = Vehicle;
// let Car = {};
// Car = Object.extend(Car, Vehicle);
// console.log(Car);
