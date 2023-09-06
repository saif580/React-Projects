import { configureStore } from "@reduxjs/toolkit";
import isShowReducer from './cartshow';
import addToCartReducer from './addtocart';

const store=configureStore({
    reducer:{
        isShown:isShowReducer,
        addToCart:addToCartReducer
    }
})

export default store;