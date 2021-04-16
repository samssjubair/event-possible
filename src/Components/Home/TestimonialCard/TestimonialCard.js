import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons'

const TestimonialCard = ({testimonial}) => {
    return (
        <div className="col-md-4 text-center p-5 rounded">
            <div className="shadow-lg py-5 px-2 ">
                <div style={{height: '200px'}}>
                    <h4>{testimonial.name}</h4>
                    <h5 className="brand-color my-3">{testimonial.location}</h5>
                    <p className="w-75 mx-auto mb-5 text-secondary">{testimonial.description}</p>
                    
                </div>
                <div>
                    <FontAwesomeIcon className="brand-color" style={{fontSize: '2rem'}} icon={faQuoteLeft} />
                </div>

                <img style={{height: '100px',borderRadius: '20px',marginTop: '30px'}} src={testimonial.img} alt=""/>
            </div>
        </div>
    );
};

export default TestimonialCard;