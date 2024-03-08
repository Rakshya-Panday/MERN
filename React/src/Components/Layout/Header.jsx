import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="flex justify-evenly  h-20 items-center">
        <h2 className="font-semibold text-4xl px-8">online<span className="text-blue-900">Store</span></h2>
        
        
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

        <div className="grid grid-cols-3 gap-x-4  pr-6 text-2xl ">
          <button>Login<Link to = './login'><i class="bi bi-person-circle "></i></Link></button>
          <button><Link to = './register'><i class="bi bi-person-fill-add "></i></Link></button>
          
        </div>
      </div>
      <hr />
      <div className="list-none flex justify-start bg-blue-800 text-white w-full h-20 items-center text-2xl font-bold ">
     
        <li className="hover:text-white">
          <Link to="./">Home</Link>
        </li>
        <li className="hover:text-white">
          <Link to="./about">About</Link>
        </li>
        <li className="hover:text-white">
          <Link to="/contact">Contact</Link>
        </li>
        <li className="hover:text-white">
          <Link to="/services">Services</Link>
        </li>
        <button>
            <i class="bi bi-cart "></i>
          </button>
      </div>
      <hr />
    </>
  );
};

export default Header;
