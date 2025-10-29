import { BUY_ICECREAM } from './icecreamType.cjs';

const intialState = {
    numOfIcecream : 20
}

const icecreamReducer = (state=intialState,action) => {
    switch(action.type){
        case BUY_ICECREAM: return{
            ...state,
            numOfIcecream:state.numOfIcecream-1
        }
        default: return state
    }
}

export default icecreamReducer
