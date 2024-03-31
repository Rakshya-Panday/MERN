import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './CartSlice';
import productSlice from "./ProductSlice";

const store = configureStore({
    reducer :{
        cart :cartReducer,
        product:productSlice
    }
})

export  {store};