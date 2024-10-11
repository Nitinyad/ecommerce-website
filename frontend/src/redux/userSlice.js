import { createSlice } from "@reduxjs/toolkit";
import { REHYDRATE } from "redux-persist";
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Asynchronous thunk for user registration
export const registerUser = createAsyncThunk(
  'user/register',
  async (userData, { rejectWithValue }) => {
    try {
      // Make the API call to register the user
      const response = await axios.post('/auth/register', userData);
      return response.data; // This will be the registered user data from the API
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);



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
      builder
      .addCase(REHYDRATE, (state) => {
        if (state.user) {
          state.isLoggedIn = true
        }
      })
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.loading = false;
        state.userInfo = action.payload;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
    }
  },
});
export const { loginStart, loginSuccess, loginFailure,registerFailure , registerStart,registerSuccess ,signOut} = userSlice.actions;
export default userSlice.reducer;