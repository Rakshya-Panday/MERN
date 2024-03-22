// const initialState = {
//     game:"Football",
//     player:"Messi"
// }

// const gameReducer = (state = initialState,action)=>{
//     switch(action.type){
//         case"UPDATE_GAME":
//         return{...state,game:action.payload}
//         case"UPDATE_PLAYER":
//         return{...state,player:action.payload}
    
//     default :
//     return state
// }
// }
// export default gameReducer;


import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    game :"BasketBall",
    player : "Messi"
}

const gameSlice = createSlice ({
    name :"gameSlice",
    initialState,
    reducers : {
        updateGame(state,action){
            state.push(action.payload)
        }
    }
})

export const {updateGame} = gameSlice.actions;
export default gameSlice.reducer; 

