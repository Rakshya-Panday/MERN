import React from 'react'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div>
        <h1>Practise for Routing and Redux  and Redux toolkit</h1>
        <hr className='border-2' />
        <Outlet/>
    </div>
  )
}

export default Layout