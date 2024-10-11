import { createSlice } from "@reduxjs/toolkit";



const wishlist = createSlice({
    name : "wish",
    initialState:{
        products : []
    },
    reducers :{
        addToWishlist: (state, action) => {
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
          removeFromWishlist:(state , action) =>{
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
    }
})


export const {addToWishlist , removeFromWishlist}  = wishlist.actions;
export default wishlist.reducer;