import React from 'react';
import Banner from '../Header/Banner/Banner';
import About from './About/About';
import Service from './Service/Service';
import Footer from '../Footer/Footer';


const Home = () => {
    return (
        <div>
            <div>
                <Banner/>
                <About/>
                <Service/>
                <Footer/>
            </div>
        </div>
    );
};

export default Home;