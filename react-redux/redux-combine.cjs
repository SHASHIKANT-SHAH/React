const redux = require('redux')
const reduxLogger = require('redux-logger')
const logger = reduxLogger.createLogger()
const createStore = redux.createStore 
const combineReducers = redux.combineReducers
const applyMiddleware = redux.applyMiddleware

const BUY_CAKE = 'BUY_CAKE'
const BUY_ICECREAM = 'BUY_ICECREAM'

// Action Creator
function buyCake() {
    return {
        type: BUY_CAKE,
        info: 'first redux action'
    }
}
function buyIceCream() {
    return {
        type: BUY_ICECREAM,
        info: 'first redux action'
    }
}
// Initial State
const intialCakeState = {
    numOfCakes: 30
}
const intialIceCreateState = {
    numOfIceCream: 20
}

// Reducer
const cakeReducer = (state = intialCakeState, action) => {
    switch (action.type) {
        case BUY_CAKE:
            return {
                ...state,
                numOfCakes: state.numOfCakes - 1
            }
        default:
            return state
    }
}

const iceCreamReducer = (state = intialIceCreateState, action) => {
    switch (action.type) {
        case BUY_ICECREAM:
            return {
                ...state,
                numOfIceCream: state.numOfIceCream - 1
            }
        default:
            return state
    }
}

const rootReducer = combineReducers({
    cake:cakeReducer,
    icecream: iceCreamReducer
})

// 1. Create the store
const store = createStore(rootReducer,applyMiddleware(logger))

// 2. Log initial state
console.log("Initial State ", store.getState())

// 3. Subscribe to state changes
//const unsubscribe = store.subscribe(() => console.log('Updated State', store.getState()))
const unsubscribe = store.subscribe(() => {})

// 4. Dispatch actions
console.log("Dispatching actions...")
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())

store.dispatch(buyIceCream())
store.dispatch(buyIceCream())

// 5. Unsubscribe from state changes
unsubscribe()
console.log("Unsubscribed from store updates.")