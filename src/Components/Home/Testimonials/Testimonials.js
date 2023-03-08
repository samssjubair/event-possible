import React, { useEffect, useState } from "react";
import TestimonialCard from "../TestimonialCard/TestimonialCard";

const Testimonials = () => {
  const [reviews,setReviews]=useState([]);
  useEffect(()=>{
    fetch('https://event-possible.up.railway.app/allReviews')
    .then(res=>res.json())
    .then(data=> setReviews(data))
  },[reviews])
  return (
    <div className="mt-5">
      <h1 className="text-center mt-5">Happy <span className="brand-color">Clients</span> </h1>
      <div className="container-fluid row">
      {
          reviews.length ?
          reviews?.map(review=>  <TestimonialCard review={review}></TestimonialCard>)
          :
          <div style={{width: '3rem',height: '3rem',margin: '50px auto'}} class="spinner-border text-danger" role="status">
              <span class="visually-hidden">Loading...</span>
          </div>   
      }
      </div>
    </div>
  );
};

export default Testimonials;
