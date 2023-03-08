import { fireEvent } from '@testing-library/dom';
import React from 'react';
import { Link } from 'react-router-dom';
import './ServiceCard.css'

const ServiceCard = ({service}) => {
    return (
        // <div className="col-md-4 p-2   ">
        //     <div className=" service-card">
        //     <img src={service.img} alt=""/>
        //     <h2>{service.name}</h2>
        //     <p className="text-secondary mt-3 " style={{textAlign: 'justify'}}>{service.description}</p>
        //     </div>
        // </div>
        
            <div className="col-md-4 p-2">
                <Link style={{textDecoration: 'none'}} to={`/book/service/${service.name}`}>
                <div class="card">
            
                    <div className="icon service-card"><img src={`data:image/jpeg;base64,${service.img.img}`} alt=""/></div>
                    <p class="title">{service.name}</p>
                    <p class="text">BDT {service.price}</p>
                    <p class="text">{service.description}</p>
                
                </div>
                </Link>
            </div>
        
        
    );
};

export default ServiceCard;