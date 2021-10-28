import React from "react";
import Button from "src/components/Button";
import { Button as HeaderButton } from 'semantic-ui-react';

import './style.scss';

export default function Header () {
  return (
  <header className="menubar">
    <Button content="PROJETS" path="/projects" />
    <Button content="PROMOS" path="/promos" />
    <Button content="ETUDIANTS" path="/students" />
    <Button content="LA TEAM" path="/team" />
    <Button content="CONTACT" />
    <Button content="CONNEXION" />
  </header>
  )
}
