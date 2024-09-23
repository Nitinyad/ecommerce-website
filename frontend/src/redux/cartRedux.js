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
    addToCompare: (state, action) => {
      console.log("State before adding product:", state);
      console.log("Action payload:", action.payload);

      if (!Array.isArray(state.products)) {
        console.error("Products array is not initialized correctly.");
        state.products = [];
      }
      const updatedProducts = [...state.products, action.payload];

  // Return the new state with the updated products array
  return {
    ...state,
    products: updatedProducts,
  };

      // console.log("State after adding product:", state);
    },
    removeCompare:(state , action) =>{
      console.log("State before removing product:", state);
  console.log("Action payload:", action.payload);

  if (!Array.isArray(state.products)) {
    console.error("Products array is not initialized correctly.");
    state.products = [];
  }

  const updatedProducts = state.products.filter(product => product.id !== action.payload.id);
  console.log("State after removing product:", { ...state, products: updatedProducts });

  return {
    ...state,
    products  : updatedProducts,
  };
  
    },
    removeProduct: (state, action) => {
      const index = state.products.findIndex(
        product => product.id === action.payload.id && product.color === action.payload.color && product.size === action.payload.size
      );
      // arr[] = { 2, ,2,4,5,5,5}
      console.log("Found index:", index);
      if (index !== -1) {
        state.quantity -= 1;
        state.total -= state.products[index].price * state.products[index].quantity;
        state.products.splice(index,1);
      }
      console.log("Updated state products:", state.products);
      
    },
  },
});

export const { addProduct , removeProduct , addToCompare , removeCompare} = cartSlice.actions;
export default cartSlice.reducer;