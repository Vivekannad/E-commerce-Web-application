import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    cartNumber : 0,
    cartedItems : [],
    itemQuantity:{},
    wishList:[],
    fillHeart: {},
}

export const cartSlice = createSlice( {
    name: 'Cart',
    initialState,
    reducers: {
        addToCart: (state,action) => {
            state.cartedItems.push(action.payload)
        },
        removeFromCart: (state,action) => {
         state.cartedItems = state.cartedItems.filter(value => value.id !== action.payload)
        },
        increaseCartNumber: (state) => {
            state.cartNumber +=1;
        },
        decreaseCartNumber: (state) => {
            state.cartNumber -=1;
        },
        cartItemQuantity: (state, action) => {
            state.itemQuantity = {...state.itemQuantity,...action.payload};
        },
        setWishListData: (state,action) => {
            state.wishList = [...action.payload];
        },
        setFillHeart(state,action){
            state.fillHeart = {...state.fillHeart,...action.payload};
        }
    }
})

export const {addToCart, increaseCartNumber, cartItemQuantity, setWishListData, setFillHeart,removeFromCart, decreaseCartNumber} = cartSlice.actions;

export const {reducer : cartReducer} = cartSlice;

export const cartExport = (state) => state.cartReducer