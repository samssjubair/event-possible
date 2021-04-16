import React from 'react';
import './Footer.css';
import FooterCol from '../FooterCol/FooterCol';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faGooglePlusG, faYoutube } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    const noNamed = [
        {name: "Wedding Management" , link: "/wedding"},
        {name: "Corporate Events" , link: "/corporate"},
        {name: "International Conference" , link: "/conference"},
        {name: "Concerts" , link: "/concert"},
        {name: "Others" , link: "/others"},
    ]
    const ourAddress = [
        {name: "Uttara Sector 13, Dhaka, Bangladesh" , link: "//google.com/map"},
        {name: "Mirpur Sector 10, Dhaka, Bangladesh " , link: "//google.com/map"},
       
    ]
    const extraServices = [
        {name: "Wedding Management" , link: "/wedding"},
        {name: "Corporate Events" , link: "/corporate"},
        {name: "International Conference" , link: "/conference"},
        {name: "Concerts" , link: "/concert"},
        
        {name: "Wedding Management" , link: "/wedding"},
        {name: "Corporate Events" , link: "/corporate"},
        
        {name: "Others" , link: "/others"},
    ]
    const services = [
        {name: "Wedding Management" , link: "/wedding"},
        {name: "Corporate Events" , link: "/corporate"},
        {name: "International Conference" , link: "/conference"},
        {name: "Concerts" , link: "/concert"},
        
        {name: "Wedding Management" , link: "/wedding"},
        {name: "Corporate Events" , link: "/corporate"},
        
        {name: "Others" , link: "/others"},
    ]
    return (
        <footer  className="footer-area clear-both">
            
            <div className="container pt-5">
                <div className="row py-5">
                    <FooterCol key={1} menuTitle={"."} menuItems={noNamed}/>
                    <FooterCol key={2} menuTitle="Services" menuItems={services}/>
                    <FooterCol key={3} menuTitle="Oral Health" menuItems={extraServices}/>
                    <FooterCol key={4} menuTitle="Our Address" menuItems={ourAddress}> 
                        
                        <div className="mt-1">
                            <h6>Call now</h6>
                            <button className="btn btn-danger">+8801624888888</button>
                        </div>
                    </FooterCol>
                </div>
                <hr/>
                <div className="copyRight text-center">
                <ul className="social-media list-inline">
                            <li className="list-inline-item"><a href="//facebook.com"><FontAwesomeIcon className="icon active-icon" icon={faFacebookF} /></a></li>
                            <li className="list-inline-item"><a href="//google.com"><FontAwesomeIcon className="icon" icon={faGooglePlusG} /></a></li>
                            <li className="list-inline-item"><a href="//instagram.com"><FontAwesomeIcon className="icon" icon={faInstagram} /></a></li>
                            <li className="list-inline-item"><a href="//youtube.com"><FontAwesomeIcon className="icon" icon={faYoutube} /></a></li>
                        </ul>
                    <p style={{color: '#a7aeb5'}} className=" mb-0">Copyright {(new Date()).getFullYear()} All Rights Reserved Samss Jubair</p>
                </div>
            </div>
        </footer>
        
    );
};

export default Footer;