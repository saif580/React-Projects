import {createSlice} from '@reduxjs/toolkit';

const initialStateAddToCart={
    quantity:0,
    amount:0
}

const addToCart=createSlice({
    name:"cartshow",
    initialState:initialStateAddToCart,
    reducers:{
        addItem(state){
            state.quantity++
        },
        increaseAmt(state,action){
          state.amount= state.quantity * action.payload
        },
        removeItem(state){
          state.quantity--
        },
        decreaseAmt(state,action){
          state.amount=state.amount-action.payload
        }
    }
});

export const addToCartActions=addToCart.actions;

export default addToCart.reducer