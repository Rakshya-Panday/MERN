import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="flex justify-evenly  h-20 items-center">
        <h2 className="font-semibold text-4xl px-8">
          online<span className="text-blue-900">Store</span>
        </h2>

        <div class="w-full md:w-1/3 mx-auto  items-center ">
          <div class="relative">
            <input
              type="text"
              className=" border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none w-full"
              placeholder="Search Here"
            />
            <button type="submit" class="absolute right-0 top-0 mt-3 mr-4">
              <i class="bi bi-search"></i>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-3   text-2xl ">
          <button className="flex gap-2">
            <p>Login</p>
            <Link to="./login">
              <i class="bi bi-person-circle"></i>
            </Link>
          </button>
          <button>
            <Link to="./register">
              <i class="bi bi-person-fill-add "></i>
            </Link>
          </button>
        </div>
      </div>
    
      <div className="bg-blue-800  flex justify-evenly h-16">
        <div className="w-2/12 px-10   " >
          <select className="bg-blue-900 text-center w-full h-full text-white px-4 py-2 text-xl hover:bg-blue-800 font-bold outline-none">
            <option value="category">Category</option>
           
            <option value="electronics">Electronics</option>
            <option value="fashion"><Link to = "/fashion">Fashion</Link></option>
            <option value="health">Health</option>
          </select>
        </div>
        <div className="list-none flex gap-5 justify-start w-1/2 text-white  h-20 items-center text-xl font-bold ">
          <li className="hover:text-white">
            <Link to="/">Home</Link>
          </li>
          <li className="hover:text-white">
            <Link to="/fashion">Fahion</Link>
          </li>
          <li className="hover:text-white">
            <Link to="/about">About</Link>
          </li>
          <li className="hover:text-white">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="hover:text-white">
            <Link to="/services">Services</Link>
          </li>
        </div>
       <div className=" bg-blue-900 w-1/6  flex items-center gap-5 text-white text-xl">
       <button><Link to = './cart'><i class="bi bi-cart text-3xl px-2"></i></Link></button>
       <p>Rs 0.00</p>
       <p>(Items:0)</p>
       </div>
      </div>
      <hr />
    </>
  );
};

export default Header;
