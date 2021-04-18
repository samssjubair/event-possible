import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router";
import SideBar from "../../Booking/SideBar/SideBar";
import Sidebar from "../Sidebar/Sidebar";

const AddService = () => {
    const history=useHistory();
    const [info,setInfo]=useState({});
    const [file,setFile]=useState('');
    const handleBlur=(e)=>{
        const newInfo={...info};
        newInfo[e.target.name]=e.target.value;
        setInfo(newInfo);
    }
    const handleFileChange=(e)=>{
        const newFile=e.target.files[0];
        setFile(newFile);
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        const formData = new FormData()
        formData.append('file', file);
        formData.append('name', info.name);
        formData.append('price', info.price);
        formData.append('description',info.description)
      
        fetch('http://localhost:5055/addService', {
          method: 'POST',
          body: formData
        })
        .then(res => res.json())
        .then(data=>{
          alert("Service added successfully");
          history.push("/");
          
        })
        
        
    }
    
  return (
    <div className="row container-fluid ps-0">
      <div className="col-md-2">
        <SideBar></SideBar>
      </div>
      <div className="col-md-10">
        <h1 className="text-center my-4">
          Add a <span className="brand-color">Service</span>
        </h1>
        <div className="col-md-9   mx-auto">
            <form onSubmit={handleSubmit} className="p-5">
                <div className="row">
                    <div class="mb-3 col-md-7">
                        <label for="exampleInputEmail1" class="form-label">Service Name</label>
                        <input onBlur={handleBlur} name="name" type="text" class="form-control" id="exampleInputEmail1" />
                        
                    </div>
                    <div class="mb-3 col-md-5">
                        <label for="image" class="form-label">Upload Image</label>
                        <input onChange={handleFileChange} name="image" type="file" class="form-control" id="image" />
                    </div>
                </div>
                <div class="mb-3">
                    <label for="name" class="form-label">Price</label>
                    <input onBlur={handleBlur} name="price" type="text" class="form-control" id="name" />
                    
                </div>
                <div class="mb-3">
                    <label for="description" class="form-label">Description</label>
                    <textarea rows="5"  onBlur={handleBlur} name="description" type="text" class="form-control" id="description" />
                    
                </div>
                
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
      </div>
    </div>
  );
};

export default AddService;
