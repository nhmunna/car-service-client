import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import AboutUs from '../AboutUs/AboutUs';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import Reviews from '../Reviews/Reviews';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <Services></Services>
            <Reviews></Reviews>
            <AboutUs></AboutUs>
            <Footer></Footer>
        </div>
    );
};

export default Home;