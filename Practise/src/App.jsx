import { useState } from 'react'

import './App.css'
import Layout from './Layout/Layout'
import Navbar from './component/Navbar'
import Footer from './component/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Layout/>
      <Footer/>
    </>
  )
}

export default App
