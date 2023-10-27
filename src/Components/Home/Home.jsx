import React from 'react';
import Banner from '../Header/Banner/Banner';
import About from './About/About';
import Service from './Service/Service';
import Footer from '../Footer/Footer';
import Navbar from '../Header/Navbar/Navbar';


const Home = () => {
    return (
        <div>
            <div>
                <Navbar/>
                <Banner/>
                <About/>
                <Service/>
                <Footer/>
            </div>
        </div>
    );
};

export default Home;