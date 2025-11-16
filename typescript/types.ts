//Primitive Types (Basic Types)
let nane: string = "John Doe";
let age: number = 30;
let isStudent: boolean = false;
console.log(`Name: ${nane}, Age: ${age}, Is Student: ${isStudent}`);
console.log(`Type of nane: ${typeof nane}`);
console.log(`Type of age: ${typeof age}`);
console.log(`Type of isStudent: ${typeof isStudent}`);

//Arrays
let number: number[] = [1, 2, 3, 4, 5];
console.log("Numbers array:", number);

let names: string[] = ["Alice", "Bob", "Charlie"];
console.log("Names array:", names);

//Tuples
let person: [string, number, boolean] = ["Rahul", 42, true];
console.log("Tuple:", person);

//Enum
enum Colors {
  Red,
  Green,
  Blue,
}
let c: Colors = Colors.Green;
console.log("Enum value:", c);
console.log("Enum name:", Colors[c]);

// Any Type
let randomValue: any = 10;
randomValue = "Hello";
randomValue = true;
console.log("Random Value:", randomValue);
console.log("Type of Random Value:", typeof randomValue);

//Unknown Type
let unknownValue: unknown = 20;
unknownValue = "World";
if (typeof unknownValue === "string") {
  console.log("Unknown Value as string:", unknownValue);
}

//Union Types
let multiType: number | boolean;
multiType = 25;
console.log("MultiType as number:", multiType);
multiType = false;
console.log("MultiType as boolean:", multiType);
