import React from "react";

import { useSelector } from "react-redux";

const Cart = () => {
  const cartItems = useSelector((state)=>state.cart)
  return (
    <>
      <h1 className="text-3xl underline text-center  mx-auto font-bold">
        Cart
      </h1>

      <table className="border-2 border-gray-300 m-auto w-3/4 mt-2">
        <thead className="mb-4">
          <tr>
            {/* <th>Id</th> */}
            <th className="w-1/12">S.N</th>
            <th className="w-2/12">Product</th>
            <th className="w-1/12">Quantity</th>
            <th className="w-2/12">Price</th>
            <th className="w-2/12">Total</th>
            <th className="w-2/12">Action</th>
          </tr>
        </thead>
        <tbody>
          
            {
              cartItems.map((items)=>(
               <>
               <tr>
                <td>{items.id}</td>
            <td>
              <img
                src={items.image}
                alt=""
                style={{ height: "100px", width: "150px" }}
                className="m-auto"
              />
              <h5 className="text-center">{items.title}</h5>
            </td>
            <td>{items.length}</td>
            <td>{items.price}</td>
            <td>500</td>
            <td>
              <button className="bg-green-600 px-4 py-2 text-white rounded-l-lg">
                <i className="bi bi-pencil-square"></i>'
              </button>
              <button className="bg-red-600 px-4 py-2 text-white rounded-r-lg">
                <i className="bi bi-trash"></i>
              </button>
            </td> 
            </tr>

               </>
              ))
            }
            
          
         
        </tbody>
      </table>
    </>
  );
};

export default Cart;
{/* <td>1</td>
            <td>
              <img
                src={img}
                alt=""
                style={{ height: "100px", width: "150px" }}
                className="m-auto"
              />
              <h5 className="text-center">Product Title</h5>
            </td>
            <td>5</td>
            <td>1000</td>
            <td>500</td>
            <td>
              <button className="bg-green-600 px-4 py-2 text-white rounded-l-lg">
                <i className="bi bi-pencil-square"></i>'
              </button>
              <button className="bg-red-600 px-4 py-2 text-white rounded-r-lg">
                <i className="bi bi-trash"></i>
              </button>
            </td> */}
