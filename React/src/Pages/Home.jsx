import React from "react";

import { Carousel } from "flowbite-react";
import img from "../assets/images/background.jpg";
import img2 from "../assets/images/fashion.jpg";
import { Link } from "react-router-dom";

const Home = () => {
  <style></style>;
  return (
    <>
      {/* <div  className = " relative flex m-auto min-h-screen " style={{ height: '75vh' }}>
        <Carousel >
          <img
            className="h-3/4 w-3/4"
            src={img}
            alt="..."
          />
          <img
            src={img2}
            alt="..."
          />
          <img
            src="https://flowbite.com/docs/images/carousel/carousel-3.svg"
            alt="..."
          />
          <img className="max-h-auto max-w-auto overflow-hidden"
            src={img}
            alt="..."
          />
          <img
            src="https://flowbite.com/docs/images/carousel/carousel-5.svg"
            alt="..."
          />
        </Carousel>
      </div> */}

      <div className="home min-h-[550px] bg-no-repeat cover ">
        <div className="container mx-auto py-48 flex-col items-center">
          <h1 className="text-6xl font-medium mb-4 text-white">
            We Provide <br /> best Quality Product
          </h1>
          <p className="text-white font-semibold text-xl">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque
            praesentium
            <br /> dolorum nostrum ipsam iusto eos, perspiciatis autem, .
          </p>
          <div className="mt-5">
            <Link className=" bg-blue-500 rounded   text-white p-2">
              Shop Now
            </Link>
          </div>
        </div>
      </div>

      <div className="container flex justify-center gap-10 mx-auto ">
        <div className=" w-10/12  py-8 items-center grid grid-cols-3 gap-6 mx-auto  justify-center">
          <div className="border-2 shadow-md flex  border-blue-200 rounded-sm   py-5  justify-center items-center gap-5">
            <i class="bi bi-truck text-5xl"></i>
            <div>
              <h1 className="text-xl font-semibold">Free Shopping</h1>
              <p>Order over 200</p>
            </div>
            
          </div>
          <div className="border-2  shadow-md flex border-blue-200 rounded-sm py-5 justify-center items-center gap-5">
            <i class="bi bi-coin text-5xl"></i>
            <div>
              <h1 className="text-xl font-semibold">Money Returns</h1>
              <p className="text-gray-500">7 Days money return</p>
            </div>
            
          </div>
          <div className="border-2 shadow-md flex  border-blue-200 rounded-sm   py-5  justify-center items-center gap-5">
            <i class="bi bi-clock text-5xl"></i>
            <div>
              <h1 className="text-xl font-semibold">24/7 Support</h1>
              <p>Customer Support</p>
            </div>
            
          </div>
        </div>
        
      </div>
    </>
  );
};

export default Home;
