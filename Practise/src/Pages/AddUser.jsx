import React, { useState } from "react";
import { Link } from "react-router-dom";


const AddUser = () => {

  const[userDetail,setUserDetail] = useState({})
  const getuserDetail = (e)=>{
    setUserDetail({...userDetail,[e.target.name]:e.target.value})

  }
// console.log(userDetail)

const handleSubmit = ()=>{

}
  
  return (
    <>
      <form className="mt-4" onSubmit={handleSubmit}>
        <div class="mb-3 flex">
          <label class="form-label mx-5">Name</label>
          <input type="name" name="name" class = "form-control" onChange={getuserDetail}  />
        </div>
        <div class="mb-3 flex">
          <label class="form-label mx-5">Email </label>
          <input type="email" name = "email" class = "form-control"  onChange={getuserDetail}   />
        </div>
        <div class="mb-3 flex">
          <label class="form-label mx-5">Address</label>
          <input type="address" name="address" class = "form-control"  onChange={getuserDetail}  />
        </div>

        <button
          type="submit"
          className="bg-blue-500 w-1/6 h-11 text-white text-2xl" >
          Submit
        </button>
      </form>
    </>
  );
};

export default AddUser;
