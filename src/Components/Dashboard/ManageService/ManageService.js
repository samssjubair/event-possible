import React, { useEffect, useState } from 'react';
import ServiceTable from '../ServiceTable/ServiceTable';
import Sidebar from '../Sidebar/Sidebar';

const ManageService = () => {
    const [services,setServices]=useState([]);
    useEffect(()=>{
        fetch("http://localhost:5055/allServices")
        .then(res=>res.json())
        .then(data=>setServices(data))
    },[services])
    return (
        <div className="row ps-0 container-fluid">
            <div className="col-md-2">
                <Sidebar></Sidebar>
            </div>
            <div className="col-md-10 text-center">
                <h1 className="my-5">Manage <span className="brand-color">Services</span></h1>
                <ServiceTable services={services}></ServiceTable>
            </div>
        </div>
    );
};

export default ManageService;