var user = {
    name: "Alice",
    age: 28,
    isEmployed: true,
};
console.log("User:", user);
console.log("User Age:", user.age);
var s1 = {
    name: "Amit",
    rollNo: 101,
    getDetails: function () {
        return "Name: ".concat(this.name, ", Roll No: ").concat(this.rollNo);
    },
};
console.log(s1.getDetails());
