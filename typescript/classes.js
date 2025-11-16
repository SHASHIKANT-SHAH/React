var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//Classes
var Car = /** @class */ (function () {
    function Car(brand, year) {
        this.brand = brand;
        this.year = year;
    }
    Car.prototype.display = function () {
        console.log("Car: ".concat(this.brand, ", Year: ").concat(this.year));
    };
    return Car;
}());
var car1 = new Car("Toyota", 2020);
car1.display();
//Inheritance
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    Animal.prototype.makeSound = function () {
        console.log("Some generic sound...");
    };
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(name) {
        return _super.call(this, name) || this;
    }
    Dog.prototype.makeSound = function () {
        console.log("Woof! Woof!");
        console.log("Dog's name is ".concat(this.name));
    };
    return Dog;
}(Animal));
var dog = new Dog("Tommy");
dog.makeSound(); // Output: Woof! Woof!
//Access Modifiers
var Person = /** @class */ (function () {
    function Person(name, age, address) {
        this.name = name;
        this.age = age;
        this.address = address;
    }
    Person.prototype.getDetails = function () {
        return "Name: ".concat(this.name, ", Age: ").concat(this.age, ", Address: ").concat(this.address);
    };
    return Person;
}());
var person1 = new Person("John", 30, "123 Main St");
console.log(person1.getDetails());
// console.log(person1.age); // Error: 'age' is private
// console.log(person1.address); // Error: 'address' is protected
//Static Members
var MathUtil = /** @class */ (function () {
    function MathUtil() {
    }
    MathUtil.calculateCircumference = function (radius) {
        return 2 * MathUtil.PI * radius;
    };
    MathUtil.PI = 3.14159;
    return MathUtil;
}());
console.log("Value of PI:", MathUtil.PI);
console.log("Circumference of circle with radius 5:", MathUtil.calculateCircumference(5));
//Abstract Classes
var Shape = /** @class */ (function () {
    function Shape() {
    }
    return Shape;
}());
var Rectangle = /** @class */ (function (_super) {
    __extends(Rectangle, _super);
    function Rectangle(width, height) {
        var _this = _super.call(this) || this;
        _this.width = width;
        _this.height = height;
        return _this;
    }
    Rectangle.prototype.area = function () {
        return this.width * this.height;
    };
    Rectangle.prototype.perimeter = function () {
        return 2 * (this.width + this.height);
    };
    return Rectangle;
}(Shape));
var rect = new Rectangle(10, 5);
console.log("Rectangle Area:", rect.area());
console.log("Rectangle Perimeter:", rect.perimeter());
