import React from 'react'
import { Link } from 'react-router-dom'

const Fashion = () => {
 const products = [
    {},{},{},{},{},{},{},{},{}
  ]
  return (
    <>
    <div className='grid grid-cols-4 mx-auto'>
      < div className='bg-blue-500 col-span-1 px-8 min-h-screen '>
        <h1 className='text-2xl '>Deals</h1>
        <ul>
         <Link to= "#"> <li>New Year Offer</li></Link>
         <Link to= "#"> <li>New Year Offer</li></Link>
         <Link to= "#"> <li>New Year Offer</li></Link>
          
        </ul>
        <h1>Category</h1>
        <input type="checkbox" id='men'/><label htmlFor="men">Mens</label>
        <input type="checkbox" /><label htmlFor="">Mens</label>
        <input type="checkbox" /><label htmlFor="">Mens</label>
        <input type="checkbox" /><label htmlFor="">Mens</label>

        <h1>Price Range</h1>
        <input type="radio" /><label htmlFor="">upto 1000</label>
        <input type="radio" /><label htmlFor="">upto 5000</label>
        <input type="radio" /><label htmlFor="">upto 10000</label>
        <input type="radio" /><label htmlFor="">upto 100000</label>
      </div>
      <div className=' col-span-3  grid grid-cols-4'>
        {
          products.map((item)=>(
            <div className='card p-5 col-span-1'>
            <img src="" alt=""  style={{width :"100%",height:"150px"}}/>
            <h2>Title</h2>
            <h3>Price</h3>
            <button className='bg-green-500 text-white w-100 rounded p-3'>Add to Cart</button>
             
          </div>
          ))
        }
       
      </div>

    </div>
    
    </>
  )
}

export default Fashion