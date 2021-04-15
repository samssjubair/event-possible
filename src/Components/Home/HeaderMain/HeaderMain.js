import React from 'react';
import './HeaderMain.css';

const HeaderMain = () => {
    return (
        <div style={{zIndex: '3',textAlign: 'center'}} className="header-style d-flex t text-white">
            <div  className="mx-auto align-self-center header">
                <h1  className="brand-gradient">EVERYTHING IS POSSIBLE!</h1>
                <p >When you trust on Event possible, everything is Possible. Our goal is to make your event memorable forever</p>
                <button className="btn btn-outline-light">Contact Us</button>
            </div>
        </div>
    );
};

export default HeaderMain;