import React, { useContext } from 'react';
import {NameContext} from './App.jsx';


function ComponentC() {
        const myContext = useContext(NameContext);
    return (
        <div>
            <h1>Component C</h1>
            {myContext}
        </div>
    )
}

export default ComponentC;