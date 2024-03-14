import React from "react";
import { Carousel } from "flowbite-react";
import img from '../assets/images/fashion.jpg'

const Home = () => {
  return (
    <>
   <div  className = "flex m-auto"style={{ height: '75vh' }}>
        <Carousel >
          <img
            className=""
            src="https://images.unsplash.com/photo-1704559920243-ef2b536da968?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="..."
          />
          <img
            src="https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?q=80&w=1858&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
      </div>
    </>
  );
};

export default Home;
