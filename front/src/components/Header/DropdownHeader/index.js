import React from "react";
import {useState} from "react"
import { Link } from "react-router-dom";
import './style.scss';

export default function DropdownHeader ({loggedMessage, firstname, lastname}) {
  const [showMenu, setShowMenu] = useState(false)

  return (
    <div>
    <button onClick={() => setShowMenu(!showMenu)}>
    {loggedMessage} {firstname} {lastname}
    </button>

    {
      showMenu
        ? (
          <div className="menu">
            <button onClick={() => setShowMenu(!showMenu)}>Mon profil</button>
            <button onClick={() => setShowMenu(!showMenu)}><Link to="/admin">Administration</Link></button>
            <button onClick={() => setShowMenu(!showMenu)}>Deconnexion</button>
          </div>
        )
        : (
          null
        )
    }
    </div>
  )
}
