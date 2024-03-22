import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateGame } from '../Redux/GameSlice'

const GameDisplay = () => {
    let[gamename,setGame] = useState("")
    let[player,setPlayer] = useState("")
    let dispatch = useDispatch()
    let select = useSelector((state)=>state.game)

    const handleUpdate = (gamename)=>{
      dispatch
    }
  return (
  <>
   <div className='h-96 w-full flex justify-center items-center flex-col'>
      
      <h1>
        Game :{select.game}
        
      </h1>
     <div className='flex'>
        <input type="text" onChange={e=>setGame(e.target.value)}  />
        <button className='bg-green-500' onClick={()=>handleUpdate(gamename)}>Update Game</button>

     </div>

     {/* <h1>
        Player :{player}
        
      </h1>
     <div className='flex'>
        <input type="text"  />
        <button className='bg-green-500' onClick={()=>{
            dispatchEvent({type:"UPDATE_GAME",payload:player})
        }}>Update Player</button>

     </div> */}
    </div>
  </>
  )
}

export default GameDisplay