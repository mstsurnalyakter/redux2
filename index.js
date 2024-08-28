const { createStore } = require("redux");

//Define constant
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const RESET = "RESET";
const INCREMENT_BY_VALUE = "INCREMENT_BY_VALUE";
const DECREMENT_BY_VALUE = "DECREMENT_BY_VALUE";
const ADD_USERS = "ADD_USERS";

//state:count-1
const initialCounter = {
    users:["Mst Surnaly Akter"],
    count:0
}
const initialUser = {
    users:["Mst Surnaly Akter"],
    count:1
}

const addUser = (user) =>{
    return {
      type: ADD_USERS,
      payload:user


    };
}


//action:Increment,decrement,reset
const incrementCounter = ()=>{
    return{
        type:INCREMENT
    }
}

const decrementCounter = () =>{
    return{
        type:DECREMENT
    }
}

const resetCounter = () =>{
    return{
        type:RESET
    }
}

const incrementCounterByValue = (value) =>{
    return{
        type:INCREMENT_BY_VALUE,
        payload:value

    }
}
const decrementCounterByValue = value =>{
    return{
        type:DECREMENT_BY_VALUE,
        payload:value
    }
}



//reducer
const counterReducer = (state=initialCounter,action)=>{
    switch (action.type) {
      case INCREMENT:
        return {
          ...state,
          count: state.count + 1,
        };
      case DECREMENT:
        return {
          ...state,
          count: state.count - 1,
        };
      case INCREMENT_BY_VALUE:
        return {
          ...state,
          count: state.count + action.payload,
        };

    case DECREMENT_BY_VALUE:
        return{
            ...state,
            count:state.count - state.payload
        }


      case RESET:
        return {
          ...state,
          count: 0,
        };

      default:
        state;
    }
}

const userReducer = (state=initialUser,action)=>{
   switch (action.type) {
    case ADD_USERS:
        return{
            users:[...state.users,action.payload],
            count:state.count+1
        }

    default:
       state
   }
}

//store
const store = createStore(counterReducer);
const userStore = createStore(userReducer);

userStore.subscribe(()=>{
    console.log(userStore.getState());
})

store.subscribe(()=>{
    console.log(store.getState());
})

//action dispatch
store.dispatch(incrementCounterByValue(5));
userStore.dispatch(addUser("Salma"))
