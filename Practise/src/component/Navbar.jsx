import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    <div>
        <ul className='flex justify-center gap-10 text-2xl font-semibold'>
            <Link to='/' ><li>Home</li></Link>
            <Link to='/add'> <li>AddUser</li></Link>
            <Link to='/read'><li>Read</li></Link>
            <Link to='/update'><li>Update</li></Link>
            <Link to = '/delete'><li>Delete</li></Link>
        </ul>
    </div>
    <hr />
    </>
  )
}

export default Navbar