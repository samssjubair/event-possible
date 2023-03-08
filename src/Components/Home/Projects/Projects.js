import React from 'react';
import teamPicture from '../../../Images/proffesional2.jpg'
import AboutUs from '../AboutUs/AboutUs';

const Projects = () => {
    return (
        <div style={{backgroundColor: '#f8f9fc'}} className="row  container-fluid d-flex">
            <div className="col-md-6">
                <img className="img-fluid" src={teamPicture} alt=""/>
            </div>
            <div className="col-md-6 align-self-center">
                <AboutUs></AboutUs>
            </div>
        </div>
    );
};

export default Projects;