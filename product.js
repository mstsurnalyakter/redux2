const { createStore, combineReducers } = require("redux");

//product constant
const GET_PRODUCTS = "GET_PRODUCTS";
const ADD_PRODUCT="GET_PRODUCTS";

//cart constant
const GET_CART_ITEMS = "GET_CART_ITEMS";
const ADD_CART_ITEM = "ADD_CART_ITEM";

// producer state
const initialProductState = {
    product:["suger","salt"],
    numberOfProduct:2
}

// cart state
const initialCartItemState = {
    cartItems:["Sugar"],
    itemNumber:1
}

//product action
const getProduct = () =>{
    return{
        type:GET_PRODUCTS,
    }
}

const addProduct = (product) =>{
    return {
      type: ADD_PRODUCT,
      payload: product,
    };
}

//cart action
const getCartItems = () =>{
    return{
        type:GET_CART_ITEMS
    }
}
const addCartItem = (cart) =>{
    return{
        type:ADD_CART_ITEM,
        payload:cart
    }
}


//product reducer
const productReducer = (state=initialProductState,action)=>{
switch (action.type) {
    case GET_PRODUCTS:
   return{
    ...state
   }
   case ADD_PRODUCT:
    return {
      ...state,
      product: [...state.product, action.payload],
      numberOfProduct: state.numberOfProduct + 1,
    };
    default:
     return   state
}
}

// cart reducer
const cartReducer = (state=initialCartItemState,action)=>{
    switch (action.type) {
        case GET_CART_ITEMS:
            return{
                ...state
            }
        case ADD_CART_ITEM:
            return {
              ...state,
              cartItems: [...state.cartItems,action.payload],
            };

        default:
       return state
    }
}


const rootReducer = combineReducers({
    productR:productReducer,
    cartR:cartReducer
})


//product store
// const productStore = createStore(productReducer);
// productStore.subscribe(()=>{
//     console.log(productStore.getState());
// })

// const cartStore = createStore(cartReducer);
// cartStore.subscribe(()=>{
//     console.log(cartStore.getState());
// })

const store = createStore(rootReducer);

store.subscribe(()=>{
    console.log(store.getState());
})



//product dispatch action
// productStore.dispatch(getProduct());
// productStore.dispatch(addProduct("Rice"));

// //cart dispatch action
// cartStore.dispatch(getCartItems());
// cartStore.dispatch(addCartItem("lllllllllllll"));

store.dispatch(getProduct());
store.dispatch(addProduct("Hello"));
store.dispatch(getCartItems());
store.dispatch(addCartItem("world"));
