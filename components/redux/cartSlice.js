import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",

  initialState: {
    products: ["Earbuds", "Mobile", "laptop"],
  },

  reducers: {
    addProduct: (state, action) => {
      state.products.push(action.payload);
    },
    clearCart: (state) => {
      state.products = [];
    },
    removeItem: (state) => {
      state.products.pop();
    },
  },
});

export const { addProduct, clearCart, removeItem } = cartSlice.actions;

export default cartSlice.reducer;
