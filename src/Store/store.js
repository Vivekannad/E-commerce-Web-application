import { configureStore } from "@reduxjs/toolkit";
import { productReducer } from "../Slice Container/StoreItemsSlice";
import { cartReducer } from "../Slice Container/cartSlice";
import { authReducer } from "../Slice Container/AuthSlice";


export const store = configureStore({
    reducer: {
        productReducer,
        cartReducer,
        authReducer
    }
})