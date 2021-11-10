import React from "react";
import { useSelector } from 'react-redux'
import Button from "src/components/Button";
import logoMug from 'src/assets/header-logo.png';
import { Link } from "react-router-dom";
import './style.scss';

export default function Header () {
  const { isLogged, loggedMessage, firstname, lastname } = useSelector((state) => ({
    isLogged: state.user.logged,
    loggedMessage: state.user.loggedMessage, 
    firstname: state.user.firstname,
    lastname: state.user.lastname,
  }))
  return (
  <header className="menubar">
      <Button content="PROJETS" path="/projects" />
      <Button content="PROMOS" path="/promos" />
      <Button content="ETUDIANTS" path="/students" />
      <Link to="/"><img src={logoMug} alt='logo Mug' className='header-logo' /></Link>
      <Button content="LA TEAM" path="/team" />
      <Button content="CONTACT" path="/contact" />
      {isLogged&& (
        <p>{loggedMessage} {firstname} {lastname}</p>
      )}
      {!isLogged && (
        <Button content="CONNEXION" path="/login" />
      )}
  </header>
  )
}
