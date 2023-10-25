import React from 'react';
import Banner from '../Header/Banner/Banner';
import About from './About/About';
import Service from './Service/Service';


const Home = () => {
    return (
        <div>
            <div>
                <Banner/>
                <About/>
                <Service/>
            </div>
        </div>
    );
};

export default Home;