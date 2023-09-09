import {createSlice} from '@reduxjs/toolkit';

const cartshow=createSlice({
    name:"cartshow",
    initialState:{isShown:true,notification:null},
    reducers:{
        showCartModal(state){
            state.isShown=!state.isShown
        },
        showNotification(state,action){
            state.notification={
                status:action.payload.status,
                title:action.payload.title,
                message:action.payload.message
            }
        }
    }
});

export const cartShowAction=cartshow.actions;

export default cartshow.reducer