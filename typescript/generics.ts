//Generic Functions - 1
function identity<T>(value: T): T {
  return value;
}

console.log(identity<string>("Hello")); // Output: Hello
console.log(identity<number>(123)); // Output: 123
console.log(identity<boolean>(true)); // Output: true

//Generic Function - 2
function getArray<T>(items: T[]): T[] {
  return new Array<T>().concat(items);
}

let numArray = getArray<number>([1, 2, 3]);
let strArray = getArray<string>(["A", "B", "C"]);

//Generic Interface - 1
interface Box<T> {
  content: T;
}

let numberBox: Box<number> = { content: 100 };
let stringBox: Box<string> = { content: "Hello" };

//Generic Interface - 2
interface GenericIdentityFn<T> {
  (arg: T): T;
}

let myIdentity: GenericIdentityFn<number> = identity;
console.log(myIdentity(456)); // Output: 456

//Generic Class
class DataStore<T> {
  private data: T[] = [];

  addItem(item: T): void {
    this.data.push(item);
  }

  getItems(): T[] {
    return this.data;
  }
}

let numberStore = new DataStore<number>();
numberStore.addItem(10);
numberStore.addItem(20);
console.log(numberStore.getItems()); // [10, 20]

//Generic Constraints
interface Lengthwise {
  length: number;
}
function loggingIdentity<T extends Lengthwise>(arg: T): T {
  console.log(arg.length);
  return arg;
}
loggingIdentity({ length: 10, value: 3 }); // Output: 10
loggingIdentity("Hello, TypeScript!"); // Output: 18
//loggingIdentity(42); // Error: Argument of type 'number' is not assignable to parameter of type 'Lengthwise'.

//Generic Default Types
function createArray<T = string>(length: number, value: T): T[] {
  let result: T[] = [];
  for (let i = 0; i < length; i++) {
    result[i] = value;
  }
  return result;
}
console.log(createArray(3, "Hello")); // Output: [ 'Hello', 'Hello', 'Hello' ]
console.log(createArray<number>(4, 42)); // Output: [ 42, 42, 42, 42 ]
