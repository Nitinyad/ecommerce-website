import { createSlice } from "@reduxjs/toolkit";
import { REHYDRATE } from "redux-persist";



const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: null,
    isFetching: false,
    error: false,
    user: {},
    isLoggedIn: false,
  },
  reducers: {
    loginStart: (state) => {
      state.isFetching = true;
    },
    loginSuccess: (state, action) => {
      state.isFetching = false;
      state.isLoggedIn = true;
      state.currentUser = action.payload;
    },
    loginFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    registerStart : (state) =>{
      state.isFetching = true
    },
    registerSuccess : (state , action) =>{
      state.isFetching = false;
      state.isLoggedIn = true;
      state.currentUser = action.payload;
    },
    registerFailure : (state) =>{
      state.isFetching = true;
    },
    signOut: (state) => {
        state.currentUser = null;
        state.user = null;
        localStorage.removeItem("cart");
        state.isLoggedIn = false
        state = undefined
    },
    extraReducers: (builder) => {
      builder.addCase(REHYDRATE, (state) => {
        if (state.user) {
          state.isLoggedIn = true
        }
      })
    }
  },
});
export const { loginStart, loginSuccess, loginFailure,registerFailure , registerStart,registerSuccess ,signOut} = userSlice.actions;
export default userSlice.reducer;