import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import logo from '../../../Images/white-logo.png'

const Navbar = () => {
    const [loggedInUser,setLoggedInUser]=useContext(UserContext);
    
  const [isAdmin,setIsAdmin]=useState(false)
  useEffect(()=>{
    fetch("https://event-possible.up.railway.app/isAdmin",{
      method: "POST",
      headers: {"Content-type": "application/json"},
      body: JSON.stringify({email: loggedInUser.email})
    })
    .then(res=>res.json())
    .then(data=>{
      setIsAdmin(data)
    })
  },[loggedInUser.email])
    return (
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
        <div class="container-fluid">
            <Link to="/" class="ms-5 navbar-brand" href="#">
                <img style={{height: '50px'}} src={logo} alt=""/>
            </Link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="ms-auto navbar-nav">
                <li class=" me-3  nav-item">
                    <Link  className="nav-link active" to="/">Home</Link>
                </li>
                
                <li class="me-3 nav-item">
                <a class="nav-link" href="#services">Services</a>
                </li>
                <li class="me-3 nav-item">
                <a class="nav-link" href="#employee">Our Team</a>
                </li>
                <li class="me-3 nav-item">
                <a class="nav-link" href="#contact">Contact Us</a>
                </li>
                
                <li class=" me-3  nav-item">
                    <Link  className="nav-link " to={isAdmin? "/dashboard/bookingList": "/book/history"}>Dashboard</Link>
                </li>
                
                {
                    loggedInUser.email? 
                    
                    <li style={{marginTop: '0'}} className="nav-item me-5" >
                        <button onClick={()=>setLoggedInUser({})} className="btn px-4 btn-outline-light">Logout</button>
                     </li>:
                     <Link style={{marginTop: '0'}} className="nav-item me-5" to="/login">
                        <button className="btn px-4 btn-outline-danger">Login</button>
                    </Link> 
                }
                 
                
            </ul>
            </div>
        </div>
        </nav>
    );
};

export default Navbar;