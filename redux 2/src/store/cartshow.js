import {createSlice} from '@reduxjs/toolkit';

const initialStateCartShow={
    isShown:true
}

const cartshow=createSlice({
    name:"cartshow",
    initialState:initialStateCartShow,
    reducers:{
        showCartModal(state){
            state.isShown=!state.isShown
        }
    }
});

export const cartShowAction=cartshow.actions;

export default cartshow.reducer