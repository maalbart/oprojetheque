import React from "react";
import Button from "src/components/Button";

import './style.scss';

export default function Header () {
  return (
  <header className="menubar">
    <Button content="ACCUEIL" path="/" />
    <Button content="PROJETS" path="/projects" />
    <Button content="PROMOS" path="/promos" />
    <Button content="ETUDIANTS" path="/students" />
    <Button content="LA TEAM" path="/team" />
    <Button content="CONTACT" path="/contact" />
    <Button content="CONNEXION" path="/login" />
  </header>
  )
}
