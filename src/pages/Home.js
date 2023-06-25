import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Destination from '../components/Destination';
import { Trip } from '../components/Trip';
import Footer from '../components/Footer';

const Home = () => {
    return (
        <>
         <Navbar></Navbar>
        <Hero cName='home'
              homeimg='https://cdn.pixabay.com/photo/2017/03/05/00/34/panorama-2117310_960_720.jpg'
              tittle='Your Journey Your Story'
              text= 'Book Your Favorite Destination'
              btntext='Book Now'
              btnCName='btn-class'
        />
        <Destination></Destination>
        <Trip/>
        <Footer></Footer>
        </>
    )
}

export default Home;