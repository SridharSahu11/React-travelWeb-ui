import React from 'react';
import './Destination.css'
import image1 from '../Images/singapore1.jpg';
import image2 from '../Images/singapore2.jpg';

 const Destination = () => {
  return (
  <div className='destination'>
    <h1>Popular Destination</h1>
    <p>Explore the world with Joy and pleasure</p>
    <div className='first-des'>
        <div className='des-text'>
            <h2>HongKong, Singapure</h2>
            <p>The city-state lies on the main island and encompasses additional fifty smaller neighbouring islands. The city of Singapore differs from its neighbouring Asian metropolises mostly in cleanliness and tidiness. The airport in Singapore is an international hub, which means flight connections to this part of the world are excellent. More than fifty large ships arrive in the country’s port each day. Tourism is booming and communicating doesn’t pose any difficulties because English is an official language. English traditions, however, are noticeable elsewhere, for example, lining up in queues. Singapore is one of the wealthiest countries in the world and it also intends to remain as such, including through its strict laws. One of these laws imposed a ban on chewing gum sales. Travellers are particularly advised against littering while exploring the country because it can result in fines and street cleaning punishment.</p>
        </div>
        <div className='image'>
        <img alt='image' src={image1}/>
        <img alt='image' src={image2}/>
        </div>
    </div>
  </div>
  )
}
export default Destination;