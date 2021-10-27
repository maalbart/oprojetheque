import React from "react";
import Button from "src/components/Button";
import { Button as HeaderButton } from 'semantic-ui-react';

import './style.scss';

export default function Header () {
  return (
  <header className="menubar">
    {/* <HeaderButton className="menubar-button" content='Projets' />
    <HeaderButton className="menubar-button" content='Promos' />
    <HeaderButton className="menubar-button" content='Etudiants' />
    <HeaderButton className="menubar-button" content='La Team' />
    <HeaderButton className="menubar-button" content='Contact' />
    <HeaderButton className="menubar-button" content='Connexion' /> */}
    <Button content="PROJETS" />
    <Button content="PROMOS" />
    <Button content="ETUDIANTS" />
    <Button content="LA TEAM" />
    <Button content="CONTACT" />
    <Button content="CONNEXION" />
  </header>
  )
}
