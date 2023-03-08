import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router";
import { UserContext } from "../../../App";
import SideBar from "../SideBar/SideBar";

const Review = () => {
    const history= useHistory();
    const [loggedInUser,setLoggedInUser]=useContext(UserContext);
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = (data) => {
    const newReview= {...data, img: loggedInUser.img};
    console.log(newReview);
    fetch('https://event-possible.up.railway.app/addReview',{
        method: 'POST',
        headers: {'Content-type': 'application/json'},
        body: JSON.stringify(newReview)
    })
    .then(res=>res.json())
    .then(data=>{
        if(data){
            alert("Review successfully added");
            history.push("/");
        }
    })
  };

  return (
    <div className="row container-fluid ps-0">
      <div className="col-md-2">
        <SideBar></SideBar>
      </div>
      <div className="col-md-10 text-center my-5">
        <h1>
          Provide us <span className="brand-color">Feedback</span>
        </h1>

        <div
          
          className="col-md-9  mx-auto"
        >
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              name="name"
              className="form-control mt-4"
              placeholder="Your Name"
              defaultValue={loggedInUser.userName}
              {...register("name", { required: true })}
            />
            {errors.name && <span className="error">Name is required</span>}

            <input
              name="location"
              className="form-control mt-4"
              placeholder="Location"
              
              {...register("location", { required: true })}
            />
            {errors.email && <span className="error">Location is required</span>}

            <textarea
              name="review"
              className="form-control mt-4"
             rows="10" cols="30"
              placeholder="review"
              {...register("review", { required: true })}
            />
            {errors.service && (
              <span className="error">Review is required</span>
            )}

            

            <input className="btn btn-danger mt-4" type="submit" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Review;
