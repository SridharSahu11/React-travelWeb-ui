import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';

 const Contact = () => {
  return (
    <>
    <Navbar></Navbar>
    <Hero cName='contact'
       tittle='Contact Us'
       homeimg='https://cdn.pixabay.com/photo/2017/05/30/01/37/contact-us-2355451_960_720.jpg'
      />
    </>
  )
}

export default Contact;