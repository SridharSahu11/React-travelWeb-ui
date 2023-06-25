import React from 'react';
import './Hero.css';

const Hero = (props) => {
    return (
        <div className={props.cName}>
            <img alt='heroimg' src={props.homeimg}></img>
            <div className='hero-text'>
                <h1>{props.tittle}</h1>
                <p>{props.text}</p>
                <a href='/' className={props.btnCName}>{props.btntext}</a>
            </div>
        </div>
    )
}
export default Hero;
