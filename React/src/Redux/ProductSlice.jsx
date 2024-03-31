import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
    name :"ProductSlice",
    initialState :{
      products:[],
      loading :false,
      error:null
    },
})

export default productSlice.reducer;