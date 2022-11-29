import { Outlet } from 'react-router-dom';

import NavBar from './../Components/NavBar';
import Footer from './../Components/Footer';

import CarStore from './../Components/CarStore';

export default function Layout(){

    return(
        <div className='layout'>
            
            <NavBar />
            <Outlet />
            <Footer />

            <CarStore />
            
        </div>
    )
}