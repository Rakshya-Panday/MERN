import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const items = useSelector((state) => state.cart);

  return (
    <>
      {/* <div className="flex justify-evenly  h-20 items-center ">
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

      <div className="bg-blue-800  flex justify-evenly h-16  ">
        <div className="menu  bg-blue-900 w-1/6   text-center mx-auto text-white text-xl font-semibold" >
          <ul  >
            <li className="mt-7" >
              Category
              <div className="sub-menu">
                <ul className=" text-black mt-2 ">
                  <li><Link to = '/fashion'>Fashion</Link></li>
                  <li><Link to = '/health'>Health</Link></li>
                  <li>Beauty</li>
                </ul>
              </div>
            </li>
          </ul>
        </div>

        <div className="list-none flex gap-5 justify-start w-1/2 text-white  h-20 items-center text-xl font-bold ">
          <li className="hover:text-white">
            <Link to="/">Home</Link>
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
          <button>
            <Link to="./cart">
              <i class="bi bi-cart text-3xl px-2"></i>
            </Link>
          </button>
          <p>Rs 0.00</p>
          <p>(Items:{items.length})</p>
        </div>
      </div>
      <hr /> */}

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
