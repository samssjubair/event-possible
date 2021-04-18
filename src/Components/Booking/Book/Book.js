import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory, useParams } from "react-router";
import { UserContext } from "../../../App";
import PaymentProcess from "../PaymentProcess/PaymentProcess";
import SideBar from "../SideBar/SideBar";

const Book = () => {
    const history=useHistory();
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const { serviceName } = useParams();
  const [bookingInfo,setBookingInfo]= useState(null);
  
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = (data) => {
    setBookingInfo(data);
  };
  const handlePaymentSuccess = (paymentId) => {
    
    const bookingDetail = {
      ...loggedInUser,
      service: serviceName,
      status: 'pending',
      paymentId: paymentId,
      shipment: bookingInfo,
      bookTime: new Date()
    };
    console.log(bookingDetail);
    fetch("https://aqueous-dawn-15668.herokuapp.com/addBooking", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(bookingDetail),
    })
      .then((res) => res.json())
      .then((data) => {
        
        alert("Order placed successfully");
        history.push('/');
      });
  };

  return (
    // <div className="row container-fluid ps-0">
    //     <div className="col-md-2">
    //         <SideBar></SideBar>
    //     </div>
    //     <div className="col-md-10">
    //     <h1 className="brand-color text-center my-5">Book Now</h1>
    //         <div className="w-75 mx-auto">

    //             <form onSubmit={handleSubmit}>
    //                 <input name="name" className="form-control mb-3" type="text" value={loggedInUser.userName}/>
    //                 <input name="email" className="form-control mb-3" type="email" value={loggedInUser.email}/>
    //                 <input name="service" className="form-control mb-3" type="text" value={serviceName}/>
    //                 <button type="submit" className="btn btn-danger">Submit</button>
    //             </form>
    //         </div>
    //     </div>
    // </div>
    <div className="row container-fluid ps-0">
        <div className="col-md-2">
             <SideBar></SideBar>
        </div>
        <div className="col-md-10">
        <h1 className="brand-color text-center my-5">Book Now</h1>
        <div style={{ display: bookingInfo ? "none" : "block" }} className="col-md-6  mx-auto">
            <form  onSubmit={handleSubmit(onSubmit)}>
            <input
                name="name"
                className="form-control mt-4"
                placeholder="Your Name"
                defaultValue={loggedInUser.userName}
                {...register("name", { required: true })}
            
            />
            {errors.name && <span className="error">Name is required</span>}

            <input
                name="email"
                className="form-control mt-4"
                placeholder="Email"
                defaultValue={loggedInUser.email}
                {...register("email", { required: true })}
            />
            {errors.email && <span className="error">Email is required</span>}

            <input
                name="service"
                className="form-control mt-4"
                defaultValue={serviceName}
                placeholder="Service"
                {...register("service", { required: true })}
            />
            {errors.service && <span className="error">Service is required</span>}

            <input
                name="phone"
                className="form-control mt-4"
                placeholder="Contact"
                {...register("phone", { required: true })}
            />
            {errors.phone && <span className="error">Phone no is required</span>}
            <input
                name="address"
                className="form-control mt-4"
                placeholder="Address"
                {...register("address", { required: true })}
                
            />
            {errors.address && <span className="error">Address  is required</span>}

            <input className="btn btn-danger mt-4" type="submit" />
            </form>
        </div>
      <div
        style={{ display: bookingInfo ? "block" : "none" }}
        className="col-md-6 mx-auto text-center shadow p-5"
      >
        <h2 className=" my-5">Finish your Payment</h2>
        <PaymentProcess
          handlePaymentSuccess={handlePaymentSuccess}
        ></PaymentProcess>
      </div>
      </div>
    </div>
  );
};

export default Book;
