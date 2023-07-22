// complete this js code
// Person constructor function
function Person(name, age) {
  this.name = name;
  this.age = age;
}

// Method added to the Person prototype
Person.prototype.greet = function () {
  console.log(`Hello, my name is ${this.name}, I am ${this.age} years old.`);
};

// Employee constructor function
function Employee(name, age, jobTitle) {
  // Call the Person constructor using 'call' to set the name and age properties
  Person.call(this, name, age);
  this.jobTitle = jobTitle;
}

// Inherit the Person prototype into the Employee prototype
Employee.prototype = Object.create(Person.prototype);
// Set the constructor property back to Employee
Employee.prototype.constructor = Employee;

// Method added to the Employee prototype
Employee.prototype.jobGreet = function () {
  console.log(`Hello, my name is ${this.name}, I am ${this.age} years old, and my job title is ${this.jobTitle}.`);
};

// Example usage:
const person1 = new Person("John Doe", 30);
person1.greet(); // Output: Hello, my name is John Doe, I am 30 years old.

const employee1 = new Employee("Alice", 25, "Software Engineer");
employee1.greet(); // Output: Hello, my name is Alice, I am 25 years old.
employee1.jobGreet();

// Do not change code below this line
window.Person = Person;
window.Employee = Employee;
