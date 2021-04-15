import React from 'react';
import Header from '../Header/Header';
import Projects from '../Projects/Projects';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Services></Services>
            <Projects></Projects>
        </div>
    );
};

export default Home;