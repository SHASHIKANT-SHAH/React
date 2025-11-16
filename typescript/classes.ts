//Classes
class Car {
  brand: string;
  year: number;

  constructor(brand: string, year: number) {
    this.brand = brand;
    this.year = year;
  }

  display(): void {
    console.log(`Car: ${this.brand}, Year: ${this.year}`);
  }
}

let car1 = new Car("Toyota", 2020);
car1.display();

//Inheritance
class Animal {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  makeSound(): void {
    console.log("Some generic sound...");
  }
}

class Dog extends Animal {
  constructor(name: string) {
    super(name);
  }

  makeSound(): void {
    console.log("Woof! Woof!");
    console.log(`Dog's name is ${this.name}`);
  }
}

let dog = new Dog("Tommy");
dog.makeSound(); // Output: Woof! Woof!

//Access Modifiers
class Person {
  public name: string;
  private age: number;
  protected address: string;
  constructor(name: string, age: number, address: string) {
    this.name = name;
    this.age = age;
    this.address = address;
  }
  public getDetails(): string {
    return `Name: ${this.name}, Age: ${this.age}, Address: ${this.address}`;
  }
}

let person1 = new Person("John", 30, "123 Main St");
console.log(person1.getDetails());
// console.log(person1.age); // Error: 'age' is private
// console.log(person1.address); // Error: 'address' is protected

//Static Members
class MathUtil {
  static PI: number = 3.14159;
  static calculateCircumference(radius: number): number {
    return 2 * MathUtil.PI * radius;
  }
}

console.log("Value of PI:", MathUtil.PI);
console.log(
  "Circumference of circle with radius 5:",
  MathUtil.calculateCircumference(5)
);

//Abstract Classes
abstract class Shape {
  abstract area(): number;
  abstract perimeter(): number;
}
class Rectangle extends Shape {
  width: number;
  height: number;

  constructor(width: number, height: number) {
    super();
    this.width = width;
    this.height = height;
  }
  area(): number {
    return this.width * this.height;
  }
  perimeter(): number {
    return 2 * (this.width + this.height);
  }
}

let rect = new Rectangle(10, 5);
console.log("Rectangle Area:", rect.area());
console.log("Rectangle Perimeter:", rect.perimeter());

//Interfaces with Classes
interface Printable {
  print(): void;
}
class PrintableDocument implements Printable {
  content: string;

  constructor(content: string) {
    this.content = content;
  }
  print(): void {
    console.log("Document Content:", this.content);
  }
}

let doc = new PrintableDocument("This is a sample document.");
doc.print();

//Implementing Multiple Interfaces
interface Scannable {
  scan(): void;
}
class MultiFunctionPrinter implements Printable, Scannable {
  print(): void {
    console.log("Printing document...");
  }
  scan(): void {
    console.log("Scanning document...");
  }
}

let mfp = new MultiFunctionPrinter();
mfp.print();
mfp.scan();

//Getters and Setters
class Employee {
  private _fullName: string = "";
  get fullName(): string {
    return this._fullName;
  }
  set fullName(name: string) {
    if (name.length > 0) {
      this._fullName = name;
    } else {
      console.log("Invalid name");
    }
  }
}

let emp = new Employee();
emp.fullName = "Alice Johnson";
console.log("Employee Full Name:", emp.fullName);
emp.fullName = ""; // Invalid name

//Namespaces
namespace Geometry {
  export class Circle {
    radius: number;

    constructor(radius: number) {
      this.radius = radius;
    }
    area(): number {
      return Math.PI * this.radius * this.radius;
    }
    circumference(): number {
      return 2 * Math.PI * this.radius;
    }
  }
  export class Square {
    side: number;

    constructor(side: number) {
      this.side = side;
    }
    area(): number {
      return this.side * this.side;
    }
    perimeter(): number {
      return 4 * this.side;
    }
  }
}

let circle = new Geometry.Circle(7);
console.log("Circle Area:", circle.area());
console.log("Circle Circumference:", circle.circumference());
let square = new Geometry.Square(4);
console.log("Square Area:", square.area());
console.log("Square Perimeter:", square.perimeter());

//Modules
// (Assuming we have another file named 'moduleExample.ts' with exported classes/functions)
// import { ModuleClass, moduleFunction } from "./moduleExample";
// let modInstance = new ModuleClass();
// modInstance.display();
// moduleFunction();
