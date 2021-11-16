import React from "react";
import { Redirect } from "react-router-dom" ;
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { handleDisconnect } from "src/actions/user";
import './style.scss';

export default function DropdownHeader ({loggedMessage, firstname, lastname}) {
  const [showMenu, setShowMenu] = useState(false)
  const dispatch = useDispatch()
  const role = useSelector(state => state.user.role)
  return (
    <div className="logged">
    <div className="logged-header" onClick={() => setShowMenu(!showMenu)}>
    {loggedMessage} {firstname} {lastname}
    </div>

    {
      showMenu
        ? (
          <div className="logged-menu">
            <div className="logged-profile" onClick={() => setShowMenu(!showMenu)}><Link to="/profile">Mon profil</Link></div>
            {role === 1 ? <div className="logged-admin" onClick={() => setShowMenu(!showMenu)}><Link to="/admin">Administration</Link></div> : null}
            {/* <div onClick={() => setShowMenu(!showMenu)}><Link to="/admin">Administration</Link></div> */}
            <div className="logged-disconnect" onClick={() => dispatch(handleDisconnect())}><Link to="/">Deconnexion</Link></div>
          </div>
        )
        : (
          null
        )
    }
    </div>
  )
}
