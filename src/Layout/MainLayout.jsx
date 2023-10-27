import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Components/Footer/Footer'
import Navbar from '../Components/Header/Navbar/Navbar';

const MainLayout = () => {
    return (
        <div>
            <div className='max-w-6xl mx-auto'>
                <Outlet/>
                
            </div>
        </div>
    );
};

export default MainLayout;