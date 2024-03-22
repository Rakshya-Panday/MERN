import React from 'react'

const MyCounter = () => {
  return (
    <>
    <div className='h-96 w-full flex justify-center items-center flex-col'>
      
      <h1>
        Counter :0
      </h1>
      <button className='bg-blue-500' onClick={()=>{
        return dispatchEvent({type:'INCREASE_COUNT'})
      }}>Increase</button>
    </div>
    
    </>
  )
}

export default MyCounter