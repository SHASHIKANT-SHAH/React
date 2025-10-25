import { useReducer } from "react";

export default function ReducerHook() {
    const initialValue = 0;
    const reducer = (state, action) => {
        switch(action){
            case 'increment':
                return state + 1;
            case 'decrement':
                return state - 1;
            case 'reset':
                return initialValue;    
            default:
                return state;        
        }
    }
   const[state,dispatch] = useReducer(reducer,initialValue);

    return (
        <>
            <h1>Count - {state}</h1>
            <button onClick={() => dispatch('increment')}>Increment</button>
            <button onClick={() => dispatch('decrement')}>Decrement</button>
            <button onClick={() => dispatch('reset')}>Reset</button>
        </>
    )
}

