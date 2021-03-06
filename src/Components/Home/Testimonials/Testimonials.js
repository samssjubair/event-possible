import React, { useEffect, useState } from "react";
import safa from "../../../Images/people1.jpg";
import utsho from "../../../Images/people2.jpg";
import tasrin from "../../../Images/people3.jpg";
import TestimonialCard from "../TestimonialCard/TestimonialCard";

// const testimonialsData = [
//   {
//     img: tasrin,
//     name: "Tasrin",
//     location: "Mirpur",
//     description:
//       "I was kinda worried when I gave them the managing responsibility, but they were the best",
//   },
//   {
//     img: safa,
//     name: "Safa",
//     location: "Tangail",
//     description:
//       "I was kinda worried when I gave them the managing responsibility, but they were the best",
//   },
//   {
//     img: utsho,
//     name: "Utsho",
//     location: "Uttara",
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique facilis voluptates ratione corrupti pariatur ",
//   }
// ];

const Testimonials = () => {
  const [reviews,setReviews]=useState([]);
  useEffect(()=>{
    fetch('https://aqueous-dawn-15668.herokuapp.com/allReviews')
    .then(res=>res.json())
    .then(data=> setReviews(data))
  },[reviews])
  return (
    <div className="mt-5">
      <h1 className="text-center mt-5">Happy <span className="brand-color">Clients</span> </h1>
      <div className="container-fluid row">
        {reviews.map((review) => (
          <TestimonialCard review={review}></TestimonialCard>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
