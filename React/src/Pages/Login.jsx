import React from 'react'

const Login = () => {
  return (
    <>
    <div className="w-full p-5">
      
      <form className='w-full md:w-3/4 lg:w-1/2 #b2bec3p-10 m-auto '>
      <h1 className='text-center text-3xl font-bold underline uppercase'>Login</h1>
         <label htmlFor="email" className='text-xl'>Email</label>
         <input type="text" id='email' className='w-full outline-none px-4 py-2 rounded-md' />
         <label htmlFor="password" className='text-xl '>Password</label>
         <input type="text" id='password' className='w-full outline-none px-4 py-2 rounded-md' />
      </form>
    </div>
    </>
  )
}

export default Login