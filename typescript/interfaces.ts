//Interfaces
interface person {
  name: string;
  age: number;
  isEmployed?: boolean;
}
let user: person = {
  name: "Alice",
  age: 28,
  isEmployed: true,
};
console.log("User:", user);
console.log("User Age:", user.age);

//Interface with Functions
interface Student {
  name: string;
  rollNo: number;
  getDetails(): string;
}

let s1: Student = {
  name: "Amit",
  rollNo: 101,
  getDetails: function () {
    return `Name: ${this.name}, Roll No: ${this.rollNo}`;
  },
};

console.log(s1.getDetails());
