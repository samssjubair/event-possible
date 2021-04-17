import React from 'react';
import ContactUs from '../ContactUs/ContactUs';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import OurEmployee from '../OurEmployee/OurEmployee';
import Projects from '../Projects/Projects';
import Services from '../Services/Services';
import Testimonials from '../Testimonials/Testimonials';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Services></Services>
            <Projects></Projects>
            <Testimonials></Testimonials>
            <OurEmployee></OurEmployee>
            <ContactUs></ContactUs>
            <Footer></Footer>
        </div>
    );
};

export default Home;