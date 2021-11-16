import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import AdminAddPromo from "./AdminAddPromo";
import AdminAddStudent from "./AdminAddStudent";
import AdminAddProject from "./AdminAddProject";
import { Tab } from 'semantic-ui-react'
import { handleItemClick } from "src/actions/admin";

import './style.scss';

export default function Admin () {
  
  const panes = [
    {
      menuItem: 'Ajouter Promo',
      render: () => <Tab.Pane attached={false}><AdminAddPromo /></Tab.Pane>,
    },
    {
      menuItem: 'Ajouter Projet',
      render: () => <Tab.Pane attached={false}><AdminAddProject /></Tab.Pane>,
    },
    {
      menuItem: 'Ajouter Etudiant',
      render: () => <Tab.Pane attached={false}><AdminAddStudent /></Tab.Pane>,
    },
  ]

  return (
    <div className="admin-panel">
      <Tab menu={{ pointing: true }} panes={panes} />
    </div>
  )
}
