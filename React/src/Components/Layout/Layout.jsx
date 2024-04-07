import React from 'react'
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar.jsx'

const Layout = () => {
  return (
    <>
    <Header/>
    <Navbar/>
    <main>
      <Outlet/>
    </main>
    <Footer/>
    </>
  )
}

export default Layout