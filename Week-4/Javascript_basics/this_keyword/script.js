class Person {
  constructor(name, age, gender, nationality) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.nationality = nationality;
  }
  introduce() {
    return `${this.name} is ${this.age} years old, ${this.gender} and ${this.nationality}.`;
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
    this.subject = subject;
  }
  study() {
    return `studies ${this.subject}.`;
  }
}
const student1 = new Student('Phil', 21, 'Male', 'American', 'Biology');
console.log(student1.introduce(), student1.study());
