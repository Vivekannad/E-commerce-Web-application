import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    userLogged: false,
}

export const authSlice = createSlice( {
    name: 'Authorization',
    initialState,
   reducers: {
    isUserLogged: (state,action) => {
        state.userLogged = action.payload;
    },
   } 
})

export const {reducer: authReducer} = authSlice
export const {isUserLogged, userInputDetails} = authSlice.actions