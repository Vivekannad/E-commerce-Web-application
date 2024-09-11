import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { status } from "./status";
import axios from "axios";


const initialState ={
    storeItems: [],
    Status: status.pending,
    filteredArray: []
}

export const storeItemsSlice = createSlice({
    name: 'Products',
    initialState,
    extraReducers(builder){
        builder.addCase(fetchProduct.fulfilled, (state, action) => {
            state.Status = status.integrated;
            state.storeItems = action.payload;
        })
        .addCase(fetchProduct.rejected, state => {
            state.Status = status.rejected
        })
    },
    // reducers: {
    //     addToArray: (state,action) => {
    //         state.filteredArray = state.storeItems.filter(value => value.category === action.payload)
    //     },
    //     sortByLowToHigh: (state,action) => {
    //         // const price = action.payload
    //        state.filteredArray =  state[action.payload].sort((a,b) => a.price - b.price )
    //     },
    //     sortByHighToLow: (state,action) => {
    //         state.filteredArray = state[action.payload].sort((a,b) => b.price - a.price )
    //     },
    // }
})

 export const fetchProduct = createAsyncThunk('fetch/products', async() => {
    const response = await axios.get('https://api.pujakaitem.com/api/products')
    return response.data;
})

export const {addToArray, sortByHighToLow, sortByLowToHigh} = storeItemsSlice.actions
export const products = state => state.productReducer 

export const {reducer : productReducer} = storeItemsSlice