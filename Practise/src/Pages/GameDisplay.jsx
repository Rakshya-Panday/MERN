import React from 'react'

const GameDisplay = () => {
  return (
    <>
 <div className='h-96 w-full flex justify-center items-center flex-col'>
      
      <h1>
        Game :"Football"
        
      </h1>
     <div className='flex'>
        <input type="text" onChange={e=>setPlayer(e.target.value)}  />
        <button className='bg-green-500' onClick={()=>{
            dispatch({type:"UPDATE_GAME",payload:gamename})
        }}>Update Game</button>

     </div>

     <h1>
        Player :"Messi"
        
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