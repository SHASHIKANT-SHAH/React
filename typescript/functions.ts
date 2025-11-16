//Void Function
function greet(): void {
  console.log("Hello, World!");
}
greet();

//Function with Parameters and Return Type
function add(a: number, b: number): number {
  return a + b;
}
console.log("Sum:", add(5, 10));

//Function with Optional Parameter
function logMessage(message: string, userId?: string): void {
  const time = new Date().toLocaleTimeString();
  console.log(`[${time}] ${message} ${userId ? `- User: ${userId}` : ""}`);
}
logMessage("This is a log message.");
logMessage("This is a log message with user ID.", "user123");

//Function with Default Parameter
function multiply(a: number, b: number = 2): number {
  return a * b;
}
console.log("Multiply with default b:", multiply(5));
console.log("Multiply with custom b:", multiply(5, 3));

//Function with Rest Parameters
function sumAll(...numbers: number[]): number {
  return numbers.reduce((acc, curr) => acc + curr, 0);
}
console.log("Sum of all numbers:", sumAll(1, 2, 3, 4, 5));
console.log("Sum of some numbers:", sumAll(10, 20, 30));

//Function Overloading
// function combine(a: string, b: string): string;
// function combine(a: number, b: number): number;
function combine(a: any, b: any): any {
  if (typeof a === "string" && typeof b === "string") {
    return a + b;
  } else if (typeof a === "number" && typeof b === "number") {
    return a + b;
  } else {
    throw new Error("Invalid arguments");
  }
}
console.log("Combine strings:", combine("Hello, ", "TypeScript!"));
console.log("Combine numbers:", combine(10, 20));

//Arrow Functions
let divide = (a: number, b: number): number => a / b;
console.log("Divide:", divide(20, 4));

//Arrow Function with Void Return Type and union type parameter
let printId = (id: number | string): void => {
  console.log("ID:", id);
};
printId(101);

//Function Types
let myAdd: (x: number, y: number) => number;
myAdd = function (x: number, y: number): number {
  return x + y;
};
console.log("myAdd function result:", myAdd(7, 8));
