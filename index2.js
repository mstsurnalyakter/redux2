//-------------------------Counter App--------------------------
//define constants
//state
//action
//reducer
// store

const { createStore } = require("redux");

const INCREMENT= "INCREMENT";
const INCREMENT_BY_VALUE = "INCREMENT_BY_VALUE";
const DECREMENT = "DECREMENT";
const DECREMENT_BY_VALUE = "DECREMENT_BY_VALUE";
const RESET = "RESET";


const initialCounter = {
    count:0
}

const incrementCounter = () =>{
    return{
        type:INCREMENT
    }
}

const incrementByValue = value =>{
    return{
        type:INCREMENT_BY_VALUE,
        payload:value
    }
}

const decrementCounter = () =>{
    return{
        type:DECREMENT
    }
}

const decrementByValue = value =>{
    return{
        type:INCREMENT_BY_VALUE,
        payload:value
    }
}

const reset = () =>{
    return{
        type:RESET
    }
}

const resetCounter = () =>{
    return{
        type:RESET
    }
}

const counterReducer = (state=initialCounter,action)=>{
    switch (action.type) {
        case INCREMENT:
        return{
            count:state.count+1
        }
        case INCREMENT_BY_VALUE:
            return{
                count:state.count+action.payload
            }
        case DECREMENT:
            return{
                count:state.count-1
            }

        case DECREMENT_BY_VALUE:
            return{
                count:state.count - action.payload
            }

        case RESET:
            return{
                count:0
            }

        default:
            break;
    }
}


const store = createStore(counterReducer);

store.subscribe(()=>{
    console.log(store.getState());
})

store.dispatch(incrementCounter());
store.dispatch(decrementCounter());
store.dispatch(incrementByValue(7));
store.dispatch(decrementByValue(9));
store.dispatch(reset())
