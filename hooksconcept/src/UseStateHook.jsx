import { useState } from "react";

function UseStateHook() {
    const [Name, setName] = useState("BK");
    let ClickMeFuntion = () => {
        setName((Name !== "BSS") ? "BSS" : "BK");
    }
    const myObj = {
        firstName: "John",
        lastName: "Doe",
        age: 50,
        eyeColor: "blue"
    };
    
    const [person, setPerson] = useState(myObj);    
    let updatePerson = (p) => {
        setPerson({
            ...p,
            age: person.age + 1
        });
    };
    const listofNumbers = [1, 2, 3, 4, 5];
    const [number, setNumber] = useState(listofNumbers);
    let addNumbern = (n) => {
        setNumber([...n, number.length + 1]);
    }

    return (
        <div>
            <h1>{Name}</h1>
            <button onClick={ClickMeFuntion}>Change Name</button>
            <h2>{person.firstName} {person.lastName}</h2>
            <h3>Age: {person.age}</h3>
            <h3>Eye Color: {person.eyeColor}</h3>
            <button onClick={() => updatePerson(person)}>Increase Age</button>

            <h2>Numbers:</h2>
            <ul>
                {number.map((key,index) => {
                     return <li key={index}>{key}</li>
                })}
           </ul>
           <button onClick={() => addNumbern(number)}>add numbers</button>
        </div>
    );
}

export default UseStateHook;