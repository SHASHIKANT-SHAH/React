import React, {useState} from "react";
function Hooks() {
    const array = [1,2,3,4,5]; 
    const obj = {name: "Rohan", age: 21};
    const [person, setPerson] = useState(obj);
    const [numbers, setNumbers] = useState(array);  

     let setString = () => {
        setPerson(previousState  => {
             return {...previousState,
             name: "Hello"}
            });
    }
    let changeArray = () => {
        setNumbers(previousArray => {
            return [...previousArray,6,Math.floor(Math.random()*50)]
        });
    }

    return (
        <div>
            <p>{person.name}</p>
            <p>{person.age}</p>
            <button onClick={setString}>Click Me</button>
            {numbers.map( (n,index) => <li key={index}>{n}</li>)}

            <button onClick= {changeArray}>changeArray</button>
        </div>
    );
}

export default Hooks;