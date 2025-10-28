import { createStore } from "redux";
import cakeReducer from "./Cake/cakeReducer.cjs";

const store = createStore(cakeReducer)

export default store