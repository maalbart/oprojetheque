import React from "react";
import { Redirect } from "react-router-dom" ;
import { useState } from "react"
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { handleDisconnect } from "src/actions/user";
import './style.scss';

export default function DropdownHeader ({loggedMessage, firstname, lastname}) {
  const [showMenu, setShowMenu] = useState(false)
  const dispatch = useDispatch()

  return (
    <div>
    <button onClick={() => setShowMenu(!showMenu)}>
    {loggedMessage} {firstname} {lastname}
    </button>

    {
      showMenu
        ? (
          <div className="menu">
            <button onClick={() => setShowMenu(!showMenu)}><Link to="/profile">Mon profile</Link></button>
            <button onClick={() => setShowMenu(!showMenu)}><Link to="/admin">Administration</Link></button>
            <button onClick={() => dispatch(handleDisconnect())}><Link to="/">Deconnexion</Link></button>
          </div>
        )
        : (
          null
        )
    }
    </div>
  )
}
