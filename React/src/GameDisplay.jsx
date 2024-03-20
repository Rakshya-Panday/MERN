import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

const GameDisplay = () => {
    let[gamename,setGame] = useState("")
    let[player,setPlayer] = useState("")
    let disptach = useDispatch()
  return (
  <>
   <div className='h-96 w-full flex justify-center items-center flex-col'>
      
      <h1>
        Game :{game}
        
      </h1>
     <div className='flex'>
        <input type="text" onChange={e=>setPlayer(e.target.value)}  />
        <button className='bg-green-500' onClick={()=>{
            dispatch({type:"UPDATE_GAME",payload:gamename})
        }}>Update Game</button>

     </div>

     <h1>
        Player :{player}
        
      </h1>
     <div className='flex'>
        <input type="text"  />
        <button className='bg-green-500' onClick={()=>{
            dispatchEvent({type:"UPDATE_GAME",payload:player})
        }}>Update Player</button>

     </div>
    </div>
  </>
  )
}

export default GameDisplay