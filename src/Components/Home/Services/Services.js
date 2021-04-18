import React, { useEffect, useState } from 'react';
import wedding from '../../../Images/couple.png'
import conference from '../../../Images/conferencwe.png'
import concert from '../../../Images/band.png'
import party from '../../../Images/bachelor-party.png'
import iftar from '../../../Images/iftar.png'
import ServiceCard from '../ServiceCard/ServiceCard';
import './Services.css'

// const serviceData=[
//     {
//         name: 'Wedding',
//         description: 'Decoration, Cinematography, Party planning, Choreography, Food and everything, We are doing them all for you',
//         price: 50000,
//         img: wedding
//     },
//     {
//         name: 'Party',
//         description: 'All kind of party including school college office and bachelor',
//         price: 10000,
//         img: party
//     },
//     {
//         name: 'Concert',
//         description: 'We are arranging Rock/Metal/Pop/Folk concert and providing high quality sound guarantee',
//         price: 20000,
//         img: concert
//     },
//     {
//         name: 'Corporate Events',
//         description: 'Office conference, multinational conference, product launching and all king of corporate events ',
//         price: 30000,
//         img: conference
//     },
//     {
//         name: 'Iftar party',
//         description: 'Ifter Party in ramadan season',
//         price: 5000,
//         img: iftar
//     }
// ]


const Services = () => {
    const [services,setServices]=useState([]);
    useEffect(()=>{
        fetch("https://aqueous-dawn-15668.herokuapp.com/allServices")
        .then(res=>res.json())
        .then(data=>setServices(data))
    },[services])
    return (
        <div id="services">
            <h1 className="mt-5 text-center"><span className="brand-color">Services</span> We Provide</h1>
            <div className="row  p-5 content">
                {
                    services.map(service=> <ServiceCard service={service}></ServiceCard> )
                }
            </div>
        </div>
    );
};

export default Services;