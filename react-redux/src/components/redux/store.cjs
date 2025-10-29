import { createStore,applyMiddleware } from "redux";
import logger from "redux-logger";
import cakeReducer from "./Cake/cakeReducer.cjs";
import rootReducer from "./rootReducer.cjs";

const store = createStore(rootReducer,applyMiddleware(logger));

export default store