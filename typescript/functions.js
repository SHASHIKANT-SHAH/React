//Void Function
function greet() {
    console.log("Hello, World!");
}
greet();
//Function with Parameters and Return Type
function add(a, b) {
    return a + b;
}
console.log("Sum:", add(5, 10));
//Function with Optional Parameter
function logMessage(message, userId) {
    var time = new Date().toLocaleTimeString();
    console.log("[".concat(time, "] ").concat(message, " ").concat(userId ? "- User: ".concat(userId) : ""));
}
logMessage("This is a log message.");
logMessage("This is a log message with user ID.", "user123");
//Function with Default Parameter
function multiply(a, b) {
    if (b === void 0) { b = 2; }
    return a * b;
}
console.log("Multiply with default b:", multiply(5));
console.log("Multiply with custom b:", multiply(5, 3));
//Function with Rest Parameters
function sumAll() {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    return numbers.reduce(function (acc, curr) { return acc + curr; }, 0);
}
console.log("Sum of all numbers:", sumAll(1, 2, 3, 4, 5));
console.log("Sum of some numbers:", sumAll(10, 20, 30));
//Function Overloading
// function combine(a: string, b: string): string;
// function combine(a: number, b: number): number;
function combine(a, b) {
    if (typeof a === "string" && typeof b === "string") {
        return a + b;
    }
    else if (typeof a === "number" && typeof b === "number") {
        return a + b;
    }
    else {
        throw new Error("Invalid arguments");
    }
}
console.log("Combine strings:", combine("Hello, ", "TypeScript!"));
console.log("Combine numbers:", combine(10, 20));
//Arrow Functions
var divide = function (a, b) { return a / b; };
console.log("Divide:", divide(20, 4));
//Arrow Function with Void Return Type and union type parameter
var printId = function (id) {
    console.log("ID:", id);
};
printId(101);
//Function Types
var myAdd;
myAdd = function (x, y) {
    return x + y;
};
console.log("myAdd function result:", myAdd(7, 8));
