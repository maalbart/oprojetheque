import React from "react";
import logoMug from 'src/assets/logo-mug.png'
import contactArrow from 'src/assets/contactarrow.png'
import { Link } from "react-router-dom";
import './style.scss';

export default function Footer () {
  return (
    <footer className="footer">
      <img src={logoMug} alt="logo Mug" className="footer-logo" />
      <div className="footer-contact">
        <Link to="contact"><p className="footer-contact-text">Contactez-nous</p>
        <img src={contactArrow} alt="" className="footer-contact-arrow"/></Link>
      </div>
      <div className="footer-socials">
        <a href="https://twitter.com/Oclock_io"><i class="big inverted grey twitter icon"></i></a>
        <a href="https://www.facebook.com/Oclock.io"><i class="big inverted grey facebook square icon"></i></a>
        <a href="https://oclock.io/"><i class="big inverted grey globe icon"></i></a>
      </div>
    </footer>
  )
}
