import React from 'react';
import Header from 'src/components/Header';
import Footer from 'src/components/Footer'
import Benjicowboy from 'src/assets/benjicowboy.jpg';
import './style.scss';


const Error = () => (
    <div className="error">
    <h2>Erreur 404</h2>
    <p>Nous sommes désolé, une erreur s'est produite.</p>
    <img src={Benjicowboy} alt="benjicowboy" className="error-benjicowboy"/>    
    </div>
);

export default Error;

