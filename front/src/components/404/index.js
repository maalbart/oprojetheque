import React from 'react';
import Benjicowboy from 'src/assets/benjicowboy.jpg'
import Fire from 'src/assets/fire.gif'
import './style.scss';


const Error = () => (
    <div className="error">
      <div className='error-header'>
        <h2 className='error-header-title'>Erreur 404</h2>
        <p className='error-header-description'>Nous sommes désolés, une erreur s'est produite.</p>
      </div>
      <div className='error-images'>
        <img src={Fire} alt="explosion" className='error-images-explosion'/>  
        <img src={Benjicowboy} alt="benjicowboy" className="error-images-benjicowboy"/> 
        <img src={Fire} alt="explosion" className='error-images-explosion'/>  
      </div>  
    </div>
);

export default Error;

