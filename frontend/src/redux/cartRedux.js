
import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    quantity: 0,
    total: 0,
  },
  reducers: {
    addProduct: (state, action) => {
      console.log("State before adding product:", state);
      console.log("Action payload:", action.payload);

      if (!Array.isArray(state.products)) {
        console.error("Products array is not initialized correctly.");
        state.products = [];
      }

      state.quantity += 1;
      state.products.push(action.payload);

      if (action.payload.price && action.payload.quantity) {
        state.total += action.payload.price * action.payload.quantity;
      } else {
        console.error("Invalid product payload:", action.payload);
      }

      console.log("State after adding product:", state);
    },
    removeProduct: (state, action) => {
      const index = state.products.findIndex(
        product => product.id === action.payload.id && product.color === action.payload.color && product.size === action.payload.size
      );
      console.log("Found index:", index);
      if (index !== -1) {
        state.quantity -= 1;
        state.total -= state.products[index].price * state.products[index].quantity;
        state.products.splice(index, 1);
      }
      console.log("Updated state products:", state.products);
      
    },
  },
});

export const { addProduct , removeProduct} = cartSlice.actions;
export default cartSlice.reducer;