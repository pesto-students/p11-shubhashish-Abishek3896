//Session-1 Inheritance
class Vehicle {
  constructor(make, model, year, color) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.color = color;
  }
  drive() {
    console.log(`Driving {${this.make}} {${this.model}}`);
  }
}

class Car extends Vehicle {
  constructor(make, model, year, color, numSeats) {
    super(make, model, year, color);
    this.numSeats = numSeats;
  }
}

class RideShareCar extends Car {
  constructor(make, model, year, color, numSeats, isAvail) {
    super(make, model, year, color, numSeats);
    this.isAvaliable = isAvail;
  }
}

//Section-2 Polymorphism

class Shape {
  calculateArea(w, h) {
    console.log(`width is ${w} and height is ${h}`);
    return w, h;
  }
}
class Rectangle extends Shape {
  calculateArea(w, h) {
    console.log(`Area is ${w * h}`);
    return w * h;
  }
}
class Triangle extends Shape {
  calculateArea(b, h) {
    console.log(`Area is ${(b * h) / 2}`);
    return (b * h) / 2;
  }
}
class Circle extends Shape {
  calculateArea(r) {
    console.log(`Area is ${Math.pi * r * r}`);
    return Math.pi * r * r;
  }
}

//Section-3 Abstraction and encapsulation

class BankAccount {
  #accountNumber;
  #balance;
  #accountHolderName;
  constructor(acNumber, bal, name) {
    this.#accountNumber = acNumber;
    this.#balance = bal;
    this.#accountHolderName = name;
  }
  showbalance() {
    let x = this.#balance;
    return x;
  }
  updatebalance(amount) {
    this.#balance = amount;
  }
}
class CheckingAccount extends BankAccount {
  constructor(acNumber, bal, name) {
    super(acNumber, bal, name);
  }
  deposit(amount) {
    let balance = this.showbalance();
    if (amount > 0) {
      let depositedAmount = balance + amount;
      this.updatebalance(depositedAmount);
      return `Transaction successfull`;
    } else {
      return 'Transaction failed';
    }
  }
  getBalance() {
    let balance = this.showbalance();
    console.log(`The current Balance is ${balance}`);
    return `The current Balance is ${balance}`;
  }
}

class savingsAccount extends BankAccount {
  constructor(acNumber, bal, name) {
    super(acNumber, bal, name);
  }
  getBalance() {
    let balance = this.showbalance();
    console.log(`The current Balance is ${balance}`);
    return `The current Balance is ${balance}`;
  }
  withdraw(amount) {
    let balance = this.showbalance();
    if (amount > balance) {
      return 'Transaction failed Insufficient balance';
    } else {
      const remainingBalance = balance - amount;
      this.updatebalance(remainingBalance);
      return `Transaction successfull`;
    }
  }
}
const ca = new CheckingAccount('202031456211', 10000, 'Mr.Phil');
ca.deposit(1000);
ca.getBalance();
const sa = new savingsAccount('202031456211', 10000, 'Mr.Phil');
sa.withdraw(1000);
sa.getBalance();
sa.withdraw(1000039);
sa.getBalance();
