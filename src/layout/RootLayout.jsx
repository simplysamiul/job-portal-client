import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../pages/shared/Navbar';
import Footer from '../pages/shared/Footer';

const RootLayout = () => {
    return (
        <div className='max-w-7xl mx-auto'>
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    );
};

export default RootLayout;