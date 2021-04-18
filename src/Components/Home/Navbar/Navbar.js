import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import logo from '../../../Images/white-logo.png'

const Navbar = () => {
    const [loggedInUser,setLoggedInUser]=useContext(UserContext);
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
                <li class=" me-3  nav-item">
                    <Link  className="nav-link active" to="/">Home</Link>
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
                <li class=" me-3  nav-item">
                    <Link  className="nav-link " to="/book/history">History</Link>
                </li>
                <li class=" me-3  nav-item">
                    <Link  className="nav-link " to="/dashboard/bookingList">Admin</Link>
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