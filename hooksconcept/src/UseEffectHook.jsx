import { use, useState } from "react";
import { useEffect } from "react";

function UseEffectHook()  {
    let [counter, setCounter] = useState(0);
    let [name, setName] = useState("BK");

    useEffect(() => {
        console.log("useEffect called " + counter);
    },[counter]);
    useEffect(() => {
        console.log("Name Changed to " + name);
    },[name]);
return (
    <div>
        <h1>{counter}</h1>
        <h1>{name}</h1>
        <button onClick={() => setCounter(counter+1)}>UpdateValue</button>
        <button onClick={() => setName((name === "BK") ? "BSS" : "BK")}>Change Name</button>
    </div>
);
}

export default UseEffectHook;