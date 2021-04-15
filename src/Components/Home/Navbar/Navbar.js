import React from 'react';
import logo from '../../../Images/white-logo.png'

const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
        <div class="container-fluid">
            <a class="ms-5 navbar-brand" href="#">
                <img style={{height: '50px'}} src={logo} alt=""/>
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="ms-auto navbar-nav">
                <li class="me-3  nav-item">
                <a class=" nav-link active" aria-current="page" href="#">Home</a>
                </li>
                <li class="me-3 nav-item">
                <a class="nav-link" href="#">Services</a>
                </li>
                <li class="me-3 nav-item">
                <a class="nav-link" href="#">Our Team</a>
                </li>
                <li class="me-3 nav-item">
                <a class="nav-link" href="#">Contact Us</a>
                </li>
                <li class="me-3 nav-item">
                <a class="nav-link" href="#">History</a>
                </li>
                <li class="me-3 nav-item">
                <a class="nav-link" href="#">Dashboard</a>
                </li>
                <li class="me-5 nav-item">
                 <button className="btn px-4 btn-outline-light">Login</button>
                </li>
            </ul>
            </div>
        </div>
        </nav>
    );
};

export default Navbar;