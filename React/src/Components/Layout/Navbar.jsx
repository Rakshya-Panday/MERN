import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const items = useSelector((state) => state.cart);

  return (
    <>
      
      <nav className="bg-blue-800">
        <div className="container flex  mx-auto">
          <div className="px-8 py-5 bg-blue-600 flex   items-center cursor-pointer relative group">
            <span className="text-white">
              <i class="bi bi-list text-xl"></i>
            </span>
            <span className="text-white text-xl capitalize ml-2">
              {" "}
              All Categories
            </span>
            <div className="absolute bg-white w-full top-full left-0 shadow-md py-3 divide-y divide-gray-300 divide-dashed hidden group-hover:block">
              <Link to ='/fashion' className="flex items-center px-6 py-3 transition">Fashion</Link>
              <Link to='/health' className="flex items-center px-6 py-3 transition">Health</Link>
              <Link to = '/stationary' className="flex items-center px-6 py-3 transition">Stationary</Link>
              <Link  to=''className="flex items-center px-6 py-3 transition">Beauty & Health</Link>
              <Link to = '/sports'className="flex items-center px-6 py-3 transition">Sports & Outdoor</Link>
              <Link  to = '/baby'className="flex items-center px-6 py-3 transition">Babies & Toys</Link>
              <Link to ='/electric' className="flex items-center px-6 py-3 transition">Electronics Devices</Link>

            </div>
          </div>





          <div className="flex items-center justify-between flex-grow pl-12">
            <div className="flex gap-5 capitalize pl-12 items-center text-white text-xl">
              <Link to = ''>Home</Link>
              <Link to = '/shop'>Shop</Link>
              <Link to="/about">About</Link>
            
              <Link to = '/contact'>Contact Us</Link>
            </div>
            <div className="flex gap-3 capitalize pl-12 items-center text-white text-xl">
              <Link to ='/login'>Login/</Link>
              <Link to = '/register'>Register</Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
