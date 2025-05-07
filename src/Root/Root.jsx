import React from 'react';
import Navber from '../Component/Header/Navber';
import { Outlet } from 'react-router';
import Footer from '../Component/Footer/Footer';
import { Toaster } from 'react-hot-toast';

const Root = () => {
    return (
        <div >

            <Navber></Navber>

            <Toaster />
            <div className='max-w-6xl mx-auto'>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;