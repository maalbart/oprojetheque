import React from "react";
import Button from "src/components/Button";
import logoMug from 'src/assets/logo-mug.png';
import { Link } from "react-router-dom";
import './style.scss';

export default function Header () {
  return (
  <header className="menubar">
      <Button content="ACCUEIL" path="/" />
      <Button content="PROJETS" path="/projects" />
      <Button content="PROMOS" path="/promos" />
      <Button content="ETUDIANTS" path="/students" />
    <div className="menubar-center">
    <Link to="/"><img src={logoMug} alt='logo Mug' className='footer-logo' /></Link>
    </div>
      <Button content="LA TEAM" path="/team" />
      <Button content="CONTACT" path="/contact" />
      <Button content="CONNEXION" path="/login" />
  </header>
  )
}
