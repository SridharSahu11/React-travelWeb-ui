import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';

 const About = () => {
  return (
  <>
   <Navbar></Navbar>
   <Hero cName='about'
       tittle='Who Are We'
       homeimg='https://cdn.pixabay.com/photo/2015/10/30/20/13/sunrise-1014712_960_720.jpg'
      />
  </>
  )
}

export default About;