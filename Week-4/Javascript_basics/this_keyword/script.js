class Person {
  constructor(name, age, gender, nationality) {
    this.Name = name;
    this.Age = age;
    this.Gender = gender;
    this.Nationality = nationality;
  }
  introduce() {
    return `${this.Name} is ${this.Age} years old, ${this.Gender} and ${this.Nationality}.`;
  }
}
const person1 = new Person('Rahul', 35, 'Male', 'Indian');
const person2 = new Person('Ashika', 26, 'Female', 'Indian');
const person3 = new Person('Phil', 21, 'Male', 'American');

person1.introduce();
person2.introduce();
person3.introduce();

console.log(person1.introduce(), person2.introduce(), person3.introduce());

class Student extends Person {
  constructor(name, age, gender, nationality, subject) {
    super(name, age, gender, nationality);
    this.Subject = subject;
  }
  study() {
    return `studies ${this.Subject}.`;
  }
}
const student1 = new Student('Phil', 21, 'Male', 'American', 'Biology');
console.log(student1.introduce(), student1.study());
