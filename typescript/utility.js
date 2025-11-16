var partialPerson = { name: "John" };
console.log("Partial Person:", partialPerson);
var readonlyPerson = {
    name: "Jane",
    age: 25,
    address: "456 Elm St",
    getDetails: function () {
        return "Name: ".concat(this.name, ", Age: ").concat(this.age, ", Address: ").concat(this.address);
    },
};
// readonlyPerson.age = 26; // ❌ Error (correct)
console.log("Readonly Person:", readonlyPerson);
var nameAndAge = { name: "Mike", age: 40 };
console.log("Name and Age:", nameAndAge);
var personRecord = { id: "123", ssn: "456-78-9012" };
console.log("Person Record:", personRecord);
var personWithoutAddress = {
    name: "Sara",
    age: 30,
    getDetails: function () {
        return "Name: ".concat(this.name, ", Age: ").concat(this.age);
    },
};
console.log("Person Without Address:", personWithoutAddress);
var ageOrAddress = "age";
console.log("Age or Address Key:", ageOrAddress);
var nameType = "name";
console.log("Extracted Name Type:", nameType);
var nonNullablePerson = {
    name: "Tom",
    age: 35,
    address: "789 Pine St",
    getDetails: function () {
        return "Name: ".concat(this.name, ", Age: ").concat(this.age, ", Address: ").concat(this.address);
    },
};
console.log("Non-Nullable Person:", nonNullablePerson);
// 1️⃣0️⃣ Parameters — extract parameter types of a function
function createPerson(name, age, address) {
    return {
        name: name,
        age: age,
        address: address,
        getDetails: function () {
            return "".concat(name, ", ").concat(age, ", ").concat(address);
        },
    };
}
var personParams = ["Anna", 29, "321 Oak St"];
console.log("Person Parameters:", personParams);
// 1️⃣1️⃣ ConstructorParameters — extract constructor args types
var PersonClass = /** @class */ (function () {
    function PersonClass(name, age, address) {
        this.name = name;
        this.age = age;
        this.address = address;
    }
    return PersonClass;
}());
var personReturn = createPerson("David", 45, "654 Maple St");
console.log("Person Return Type:", personReturn);
var personInstance = new PersonClass("Emma", 32, "987 Cedar St");
console.log("Person Instance Type:", personInstance);
// | Utility Type                 | Meaning                                      | Example                        |
// | ---------------------------- | -------------------------------------------- | ------------------------------ |
// | **Partial<T>**               | Makes all properties optional                | `{ name?: string }`            |
// | **Readonly<T>**              | Makes all properties read-only               | cannot modify properties       |
// | **Pick<T,K>**                | Select only chosen fields                    | Pick only `name` & `age`       |
// | **Omit<T,K>**                | Remove selected fields                       | Remove `address`               |
// | **Record<K,T>**              | Create object with keys `K` & value type `T` | `{ id: string }`               |
// | **Exclude<T,U>**             | Remove items from union                      | `keyof Person` except `"name"` |
// | **Extract<T,U>**             | Keep only matching items                     | extract `"name"` from union    |
// | **NonNullable<T>**           | Remove `null`/`undefined`                    | ensures value exists           |
// | **Parameters<F>**            | Tuple of function parameter types            | `["Anna",29,"address"]`        |
// | **ConstructorParameters<C>** | Extract constructor params                   | `[string,number,string]`       |
// | **ReturnType<F>**            | Type returned by function                    | Person                         |
// | **InstanceType<C>**          | Instance type of class                       | created object type            |
