import React from 'react'
import { Link } from 'react-router-dom'

const AddUser = () => {
  return (
    <>
   <form className='mt-4'>
  <div class="mb-3 flex" >
    <label  class="form-label mx-5">Name</label>
    <input type="name" class="form-control"/>
  
  </div>
  <div class="mb-3 flex">
    <label  class="form-label mx-5">Email </label>
    <input type="email" class="form-control"/>
  
  </div>
  <div class="mb-3 flex">
    <label  class="form-label mx-5">Address</label>
    <input type="address" class="form-control"/>
  
  </div>
 
  
  
  <button type="submit" className='bg-blue-500 w-1/6 h-11 text-white text-2xl' >Submit</button>
</form>
    </>
  )
}

export default AddUser