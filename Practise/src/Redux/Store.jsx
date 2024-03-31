import { configureStore } from "@reduxjs/toolkit";
import gameSlice from './GameSlice'
import UserDetailSlice from "./UserDetailSlice";


const store = configureStore({
    reducer  : {
        game : gameSlice,
        user:UserDetailSlice

    }
})
export {store}