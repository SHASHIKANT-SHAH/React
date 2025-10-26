const BUY_CAKE = 'BUY_CAKE'


function myCake() {
    return {
    type : BUY_CAKE,
    info : 'first reduc action'
    }
}

const intialState = {
    numOfCakes : 30
}

const reducer = (state=intialState,action) => {
    switch(action.type){
        case BUY_CAKE:return{
            numOfCakes : state.numOfCakes - 1
        }
    }
}