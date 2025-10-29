import { combineReducers } from "redux";
import cakeReducer from "./Cake/cakeReducer.cjs";
import icecreamReducer from "./Icecream/icecreamReducer.cjs"

const rootReducer = combineReducers({
    cake:cakeReducer,
    iceCream: icecreamReducer
});

export default rootReducer