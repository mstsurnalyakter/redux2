const { createStore,applyMiddleware } = require("redux");
const { default: logger } = require("redux-logger");

const ADD_PRODUCT="ADD_PRODUCT";
const GET_PRODUCTS="GET_PRODUCTS";

const initialProductState = {
    count:0,
    products:["salt","banna"],
}

const getProducts = () =>{
    return{
        type:ADD_PRODUCT
    }
}

const addProduct = (product) =>{
    return{
        type:ADD_PRODUCT,
        payload:product
    }
}

const productReducer = (state=initialProductState,action)=>{
    switch (action.type) {
        case GET_PRODUCTS:
        return{
            ...state
        }
        case ADD_PRODUCT:
            return{
                ...state,
                products:[...state.products,action.payload]
            }
        default:
           state
    }
}

const store = createStore(productReducer,applyMiddleware(logger));

store.subscribe(()=>{
    console.log(store.getState());
})

store.dispatch(getProducts());
store.dispatch(addProduct("linkkkkkkkk"));