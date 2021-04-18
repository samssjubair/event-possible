import React from "react";
import { useForm } from "react-hook-form";
import SideBar from "../../Booking/SideBar/SideBar";
import Sidebar from "../Sidebar/Sidebar";

const AddAdmin = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
      const email=data.email;
      fetch("http://localhost:5055/addAdmin",{
          method: 'POST',
          headers: {'content-type': 'application/json'},
          body: JSON.stringify({email})
      })
      .then(res=>res.json())
      .then(data=>{
          alert("Admin added successfully");
      })
  };
 
  return (
    <div className="row ps-0 container-fluid">
      <div className="col-md-2">
        <SideBar></SideBar>
      </div>
      <div className="col-md-10 text-center">
        <h1 className="my-4">
          Add an <span className="brand-color">Admin</span>
        </h1>
        <form className="shadow p-5 w-75 mx-auto" onSubmit={handleSubmit(onSubmit)}>
          
          <input placeholder="Email" className="form-control" {...register("email", { required: true })} />
          
          {errors.email && <span>Email is required</span>} <br/>

          <input className="btn btn-danger my-3" type="submit" />
        </form>
      </div>
    </div>
  );
};

export default AddAdmin;
