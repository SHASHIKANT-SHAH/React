const redux = require('redux')
const createStore = redux.createStore // CORRECTED TYPO

const BUY_CAKE = 'BUY_CAKE'

// Action Creator
function buyCake() {
    return {
        type: BUY_CAKE,
        info: 'first redux action'
    }
}

// Initial State
const intialState = {
    numOfCakes: 30
}

// Reducer
const reducer = (state = intialState, action) => {
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

// 1. Create the store
const store = createStore(reducer)

// 2. Log initial state
console.log("Initial State ", store.getState())

// 3. Subscribe to state changes
const unsubscribe = store.subscribe(() => console.log('Updated State', store.getState()))

// 4. Dispatch actions
console.log("Dispatching actions...")
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())

// 5. Unsubscribe from state changes
unsubscribe()
console.log("Unsubscribed from store updates.")