import { createSlice } from "@reduxjs/toolkit";
// import  REHYDRATE  from "redux-persist";

const userToken = localStorage.getItem('token')
  ? localStorage.getItem('token')
  : null

const logSlice = createSlice({
    name : "_persist",
    initialState : {
        rehydrated : true,
        currentUser : null
      },
    // reducers :{
    //     logout:(state)=>{
    //         state.rehydrated =  false;
    //     }
    // }
    reducers: {
        logout: (state,action) => {
          state.currentUser = null;
          state.user = null;
          state.isLoggedIn = false
          state = undefined
          localStorage.removeItem(userToken) // deletes token from storage
          // state._persist.PERSIST = false;
          // state._persist.rehydrated = false
          localStorage.clear();
          // state.currentUser = action.payload
        },
    }
})

export const {logout} = logSlice.actions;
export default logSlice.reducer;