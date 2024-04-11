import React from 'react'
import Home from './Home'
import { Link } from 'react-router-dom'

const Shop = () => {
  return (
    <>
    
    <div className='container mx-auto py-5 flex items-center'>
    
      <Link to = '/'><i class="bi bi-house-fill text-blue-500 text-2xl"> </i></Link>
      <span className='text-sm '><i class="bi bi-chevron-compact-right text-black text-2xl"></i></span>
      <p className='text-2xl'>Shop</p>
    </div>
    <div className='container mx-auto grid grid-cols-4 gap-6 pt-2 pb-16 items-start'>
      <div className='col-span-1 bg-white px-4 pb-6 shadow-rounded'>
         <div className='divide-y divide-gray-200 space-y-5 '>
          {/* category filter */}
            <div>
            <h3 className='text-xl mb-3 uppercase font-medium'>categories</h3>
            <div className='space-y-2'>
              <div className='flex items-center'>
                <input type="checkbox" id='cat-1' />
                <label htmlFor="cat-1" className='ml-3 cursor-pointer'>Fashion</label>
                <div className='ml-auto text-sm'>(16)</div>
                </div>
                <div className='flex items-center'>
                <input type="checkbox" id='cat-1' />
                <label htmlFor="cat-1" className='ml-3 cursor-pointer'>Beauty & Heath</label>
                <div className='ml-auto text-sm'>(16)</div>
                </div>
                <div className='flex items-center'>
                <input type="checkbox" id='cat-1' />
                <label htmlFor="cat-1" className='ml-3 cursor-pointer'>Babies & Toys</label>
                <div className='ml-auto text-sm'>(16)</div>
                </div>
                <div className='flex items-center'>
                <input type="checkbox" id='cat-1' />
                <label htmlFor="cat-1" className='ml-3 cursor-pointer'>Stationary</label>
                <div className='ml-auto text-sm'>(16)</div>
                </div>
                <div className='flex items-center'>
                <input type="checkbox" id='cat-1' />
                <label htmlFor="cat-1" className='ml-3 cursor-pointer'>Electric Devices</label>
                <div className='ml-auto text-sm'>(16)</div>
                </div>

            </div>
            
          </div>

          {/* Brand filter */}
          <div className='pt-3'>
            <h3 className='text-xl mb-3 uppercase font-medium'>Brand</h3>
            <div className='space-y-2'>
              <div className='flex items-center'>
                <input type="checkbox" id='cat-1' />
                <label htmlFor="cat-1" className='ml-3 cursor-pointer'>Fashion</label>
                <div className='ml-auto text-sm'>(16)</div>
                </div>
                <div className='flex items-center'>
                <input type="checkbox" id='cat-1' />
                <label htmlFor="cat-1" className='ml-3 cursor-pointer'>Beauty & Heath</label>
                <div className='ml-auto text-sm'>(16)</div>
                </div>
                <div className='flex items-center'>
                <input type="checkbox" id='cat-1' />
                <label htmlFor="cat-1" className='ml-3 cursor-pointer'>Babies & Toys</label>
                <div className='ml-auto text-sm'>(16)</div>
                </div>
                <div className='flex items-center'>
                <input type="checkbox" id='cat-1' />
                <label htmlFor="cat-1" className='ml-3 cursor-pointer'>Stationary</label>
                <div className='ml-auto text-sm'>(16)</div>
                </div>
                <div className='flex items-center'>
                <input type="checkbox" id='cat-1' />
                <label htmlFor="cat-1" className='ml-3 cursor-pointer'>Electric Devices</label>
                <div className='ml-auto text-sm'>(16)</div>
                </div>

            </div>
            
          </div>  

          {/* Price Section    */}
          <div className='pt-4'>
          <h3 className='text-xl mb-3 uppercase font-medium'>Price</h3>
          <div className='flex mt-4 items-center'>
          <input
              type="text"
              className="  w-full border-2 border-gray-300 bg-white  px-3 py-1 rounded text-sm focus:outline-none shadow-md"
              placeholder='min'
            />
            <span className='text-gray-300 mx-3'>-</span>
         <input type="text" className='w-full border-2 border-gray-300  px-3 py-1 rounded text-sm focus:outline-none shadow-md '
         placeholder='max' />
          </div>

          </div>

          {/* Size */}
          <div className='pt-4'>
          <h3 className='text-xl mb-3 uppercase font-medium'>Size</h3>
          <div className='flex items-center gap-2'>
              <div className='size-selector flex gap-2'>
              <label htmlFor="size-xs" className='text-xs border-gray-300 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm'>XS</label>
              <input type="radio" name='size' className='' id='size-xs'/>
              <label htmlFor="size-xl" className='text-xs border-gray-300 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm'>XL</label>
              <input type="radio" name='size' className='' id='size-xl'/>
              <label htmlFor="size-xxl" className='text-xs border-gray-300 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm'>XXL</label>
              <input type="radio" name='size' className='' id='size-xxl'/>
              <label htmlFor="size-xxx" className='text-xs border-gray-300 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm'>XXX</label>
              <input type="radio" name='size' className='' id='size-xxx'/>
                
              </div>
          </div >

          </div>


         </div>
      </div>

    </div>
    </>
  )
}

export default Shop