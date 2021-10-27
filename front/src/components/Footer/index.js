import React from "react";
import logoMug from 'src/assets/logo-mug.png'
import './style.scss';

export default function Footer () {
  return (
    <footer className="footer">
      <img src={logoMug} alt="logo Mug" className="footer-logo" />
      <div className="footer-contact">
        <p className="footer-contact-text">Contactez nous</p>
        <p className="footer-contact-arrow">></p>
      </div>
      <div className="footer-socials">
        <i class="big inverted grey twitter icon"></i>
        <i class="big inverted grey github square icon"></i>
        <i class="big inverted grey envelope icon"></i>
      </div>
    </footer>
  )
}
