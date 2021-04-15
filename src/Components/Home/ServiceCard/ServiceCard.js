import React from 'react';
import './ServiceCard.css'

const ServiceCard = ({service}) => {
    return (
        <div className="col-md-4 p-2   ">
            <div className=" service-card">
            <img src={service.img} alt=""/>
            <h2>{service.name}</h2>
            <p className="text-secondary mt-3 " style={{textAlign: 'justify'}}>{service.description}</p>
            </div>
        </div>
    );
};

export default ServiceCard;