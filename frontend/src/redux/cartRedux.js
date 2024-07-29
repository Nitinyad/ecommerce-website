import { createSlice ,current} from "@reduxjs/toolkit";
const initialState= {
  products: [],
  quantity: 0,
  total: 0,
}
export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      // state.quantity += 1;
      // state.products.push(action.payload);
      // console.log('Current state:', state);
      // console.log('Action payload:', action.payload);
      // state.total += action.payload.price * action.payload.quantity;
      console.log(current(state))
      const product = action.payload;
      console.log(product);
      if (product && product.price && product.quantity) {
        console.log(state)
        console.log(state.quantity)
        const existingProduct = state.products.find(p => p._id === product._id);
        console.log(existingProduct)
        if (existingProduct) {
          existingProduct.quantity += product.quantity;
          state.total += product.price * product.quantity;
        } else {
          state.products.push(product);
          state.quantity += 1;
          state.total += product.price * product.quantity;
        }
        console.log(current(state))
      } else {
        console.error("Invalid product payload", action.payload);
      }
    },
    removeProduct : (state,action) =>{
      const productId = action.payload;
      const existingProduct = state.products.find(product => product.id === productId);

      if (existingProduct) {
        state.quantity -= existingProduct.quantity;
        state.total -= existingProduct.price * existingProduct.quantity;
        state.products = state.products.filter(product => product.id !== productId);
      }
      // state.products =  state.products.filter((item) => item.id !== action.payload);
    }
  },
});
 
export const {addProduct,removeProduct}  = cartSlice.actions;
export default cartSlice.reducer; 