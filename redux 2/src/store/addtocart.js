import { createSlice } from "@reduxjs/toolkit";

const initialStateAddToCart = {
  items: [],
};

const addToCart = createSlice({
  name: "cartshow",
  initialState: initialStateAddToCart,
  reducers: {
    addItem(state, action) {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (!existingItem) {
        state.items.push({
          id: action.payload.id,
          title: action.payload.title,
          price: action.payload.price,
          description: action.payload.description,
          quantity: action.payload.quantity + 1,
          totalAmount: action.payload.price,
        });
      } else {
        console.log(existingItem.price);
        existingItem.quantity++;
        existingItem.totalAmount = existingItem.quantity * existingItem.price;
      }
    },
    removeItem(state, action) {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (existingItem) {
        existingItem.quantity--;
        if (existingItem.quantity <= 0) {
          state.items = state.items.filter(
            (item) => item.id !== action.payload.id
          );
        } else {
          existingItem.totalAmount = existingItem.quantity * existingItem.price;
        }
      }
    },
  },
});



export const addToCartActions = addToCart.actions;

export default addToCart.reducer;
