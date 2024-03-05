import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
    <div>
        NavBar
    </div>
    <nav>
        <li><Link>Home</Link></li>
        <li><Link>About</Link></li>
        <li><Link>Contact</Link></li>
    </nav>
    </>
    
  )
}

export default Header