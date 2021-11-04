import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import AdminAddPromo from "./AdminAddPromo";
import AdminAddStudent from "./AdminAddStudent";
import { Menu, Segment, Tab } from 'semantic-ui-react'
import { handleItemClick } from "src/actions/admin";

import './style.scss';

export default function Admin () {
  const dispatch = useDispatch()
  const activeItem = useSelector((state) => state.admin.activeItem)
  const handleMenuClick = (evt, value) => {
    evt.preventDefault()
    dispatch(handleItemClick(value.name))
    console.log(value.name)
  }
  const panes = [
    {
      menuItem: 'Ajouter Promo',
      render: () => <Tab.Pane attached={false}><AdminAddPromo /></Tab.Pane>,
    },
    {
      menuItem: 'Ajouter Etudiant',
      render: () => <Tab.Pane attached={false}><AdminAddStudent /></Tab.Pane>,
    },
    {
      menuItem: 'Ajouter Projet',
      render: () => <Tab.Pane attached={false}>Tab 3 Content</Tab.Pane>,
    },
  ]

  return (
    <div>
      <Tab menu={{ pointing: true }} panes={panes} />
    </div>
  )
}
