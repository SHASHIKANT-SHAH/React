// 1️⃣ Person Interface
interface Person {
  name: string;
  age: number;
  address: string;
  getDetails(): string;
}

// 2️⃣ Partial<Person> — makes all properties optional
type PartialPerson = Partial<Person>;
let partialPerson: PartialPerson = { name: "John" };
console.log("Partial Person:", partialPerson);

// 3️⃣ Readonly<Person> — makes all properties readonly
type ReadonlyPerson = Readonly<Person>;
let readonlyPerson: ReadonlyPerson = {
  name: "Jane",
  age: 25,
  address: "456 Elm St",
  getDetails() {
    return `Name: ${this.name}, Age: ${this.age}, Address: ${this.address}`;
  },
};

// readonlyPerson.age = 26; // ❌ Error (correct)
console.log("Readonly Person:", readonlyPerson);

// 4️⃣ Pick<Person, "name" | "age"> — picks selected properties
type NameAndAge = Pick<Person, "name" | "age">;
let nameAndAge: NameAndAge = { name: "Mike", age: 40 };
console.log("Name and Age:", nameAndAge);

// 5️⃣ Record — creates object type with keys & value type
type PersonRecord = Record<"id" | "ssn", string>;
let personRecord: PersonRecord = { id: "123", ssn: "456-78-9012" };
console.log("Person Record:", personRecord);

// 6️⃣ Omit — removes address from Person
type PersonWithoutAddress = Omit<Person, "address">;
let personWithoutAddress: PersonWithoutAddress = {
  name: "Sara",
  age: 30,
  getDetails() {
    return `Name: ${this.name}, Age: ${this.age}`;
  },
};
console.log("Person Without Address:", personWithoutAddress);

// 7️⃣ Exclude — remove one or more keys
type AgeOrAddress = Exclude<keyof Person, "name">;
let ageOrAddress: AgeOrAddress = "age";
console.log("Age or Address Key:", ageOrAddress);

// 8️⃣ Extract — pick keys from union
type NameType = Extract<keyof Person, "name" | "age">;
let nameType: NameType = "name";
console.log("Extracted Name Type:", nameType);

// 9️⃣ NonNullable — ensures values cannot be null or undefined
type NonNullablePerson = NonNullable<Person>;
let nonNullablePerson: NonNullablePerson = {
  name: "Tom",
  age: 35,
  address: "789 Pine St",
  getDetails() {
    return `Name: ${this.name}, Age: ${this.age}, Address: ${this.address}`;
  },
};
console.log("Non-Nullable Person:", nonNullablePerson);

// 1️⃣0️⃣ Parameters — extract parameter types of a function
function createPerson(name: string, age: number, address: string): Person {
  return {
    name,
    age,
    address,
    getDetails() {
      return `${name}, ${age}, ${address}`;
    },
  };
}
type PersonParameters = Parameters<typeof createPerson>;
let personParams: PersonParameters = ["Anna", 29, "321 Oak St"];
console.log("Person Parameters:", personParams);

// 1️⃣1️⃣ ConstructorParameters — extract constructor args types
class PersonClass {
  name: string;
  age: number;
  address: string;

  constructor(name: string, age: number, address: string) {
    this.name = name;
    this.age = age;
    this.address = address;
  }
}
type PersonConstructorParameters = ConstructorParameters<typeof PersonClass>;

// 1️⃣2️⃣ ReturnType — extract return type of function
type PersonReturnType = ReturnType<typeof createPerson>;
let personReturn: PersonReturnType = createPerson("David", 45, "654 Maple St");
console.log("Person Return Type:", personReturn);

// 1️⃣3️⃣ InstanceType — type of instance created from class
type PersonInstanceType = InstanceType<typeof PersonClass>;
let personInstance: PersonInstanceType = new PersonClass(
  "Emma",
  32,
  "987 Cedar St"
);
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
