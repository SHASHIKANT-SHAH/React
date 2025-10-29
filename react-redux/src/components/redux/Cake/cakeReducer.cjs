import { BUY_CAKE } from "./cakeType.cjs"

const initialState = {
    numOfCakes:10,
    payload : 0
}

const cakeReducer = (state=initialState,action) => {
    switch(action.type){
        case BUY_CAKE:return{
            ...state,
            numOfCakes:state.numOfCakes-action.payload
        }
        default: return state
    }
}

export default cakeReducer
