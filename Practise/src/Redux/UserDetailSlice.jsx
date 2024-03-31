import { createSlice } from "@reduxjs/toolkit";

const userDetails = createSlice({
    name :"userDetail",
    initialState:{
        user:[],
        loading:false,
        error:null
    }
})

export default userDetails.reducer;