import { configureStore } from "@reduxjs/toolkit";
import gameSlice from './GameSlice'


const store = configureStore({
    reducer  : {
        game : gameSlice

    }
})
export {store}