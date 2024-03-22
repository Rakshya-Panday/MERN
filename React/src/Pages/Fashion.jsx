import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { add } from "../Redux/CartSlice";
import { useDispatch } from "react-redux";

const Fashion = () => {
  const [products, setProducts] = useState([]);
  const [limit, setLimit] = useState(8);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://fakestoreapi.com/products");
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleAdd = (product) => {
    dispatch(add(product));
  };

  return (
    <>
      <div className="grid grid-cols-5 mx-auto container max-w-[1200px]">
        <div className=" col-span-1 px-8 min-h-screen ">
          <div className="pr-5 py-5">
            <h1 className="text-2xl ">Deals</h1>
            <hr className="my-2 bg-slate-200 border-2" />
            <ul>
              <Link to="#">
                {" "}
                <li>New Year Offer</li>
              </Link>
              <Link to="#">
                {" "}
                <li>New Year Offer</li>
              </Link>
              <Link to="#">
                {" "}
                <li>New Year Offer</li>
              </Link>
            </ul>
          </div>
          <div className="pr-5 py-5">
            <h1 className="text-2xl ">Category</h1>
            <hr className="my-2 bg-slate-200 border-2" />
            <ul>
              <li>
                <input type="checkbox" />
                <label htmlFor="men">All Category</label>
              </li>
              <li>
                <input type="checkbox" />
                <label htmlFor="">Female</label>
              </li>
              <li>
                <input type="checkbox" />
                <label htmlFor="">kids</label>
              </li>
              <li>
                <input type="checkbox" />
                <label htmlFor="">Men</label>
              </li>
            </ul>
          </div>
          <div className="pr-5 py-5">
            <h1 className="text-2xl ">Price Range</h1>
            <hr className="my-2 bg-slate-200 border-2" />
            <ul>
              <li>
                <input type="radio" name="range" />
                <label htmlFor="">upto 1000</label>
              </li>
              <li>
                <input type="radio" name="range" />
                <label htmlFor="">upto 5000</label>
              </li>
              <li>
                <input type="radio" name="range" />
                <label htmlFor="">upto 10000</label>
              </li>
              <li>
                <input type="radio" name="range" />
                <label htmlFor="">upto 100000</label>
              </li>
            </ul>
          </div>
          <div className="pr-5 py-5">
            <h1 className="text-2xl ">Size</h1>
            <hr className="my-2 bg-slate-200 border-2" />
            <ul>
              <li>
                <input type="radio" name="size" />
                <label htmlFor="">35</label>
              </li>
              <li>
                <input type="radio" name="size" />
                <label htmlFor="">36</label>
              </li>
              <li>
                <input type="radio" name="size" />
                <label htmlFor="">38</label>
              </li>
              <li>
                <input type="radio" name="size" />
                <label htmlFor="">40</label>
              </li>
              <li>
                <input type="radio" name="size" />
                <label htmlFor="">XL</label>
              </li>
              <li>
                <input type="radio" name="size" />
                <label htmlFor="">XXL</label>
              </li>
            </ul>
          </div>
          <div className="pr-5 py-5">
            <h1 className="text-2xl ">Brand</h1>
            <hr className="my-2 bg-slate-200 border-2" />
            <ul>
              <li>
                <input type="checkbox" />
                <label htmlFor="men">Any</label>
              </li>
              <li>
                <input type="checkbox" />
                <label htmlFor="">Female</label>
              </li>
              <li>
                <input type="checkbox" />
                <label htmlFor="">kids</label>
              </li>
              <li>
                <input type="checkbox" />
                <label htmlFor="">Men</label>
              </li>
            </ul>
          </div>
          <div className="pr-5 py-5">
            <h1 className="text-2xl ">Warranty</h1>
            <hr className="my-2 bg-slate-200 border-2" />
            <ul>
              <li>
                <input type="checkbox" />
                <label htmlFor="">Yes</label>
              </li>
              <li>
                <input type="checkbox" />
                <label htmlFor="">No</label>
              </li>
            </ul>
          </div>
        </div>

        <div className=" col-span-4  grid grid-cols-4 ">
          {products.map((product) => (
            <div className="card p-5 col-span-1 border-2 m-2 bg-white">
              <img
                src={product.image}
                alt="image"
                style={{ width: "100%", height: "250px" }}
              />
              <h2>{product.title}</h2>
              <h3>${product.price}</h3>
              <button
                className="bg-blue-500  text-white w-100 rounded p-2"
                onClick={() => handleAdd(product)}
              >
                Add to Cart
              </button>
            </div>
          ))}
          <button onClick={()=>setLimit(limit + 4)} className="bg-blue-500 h-10 w-1/2 m-2 p-2 rounded-md text-white">
            Show More
          </button>
        </div>
      </div>
    </>
  );
};

export default Fashion;
