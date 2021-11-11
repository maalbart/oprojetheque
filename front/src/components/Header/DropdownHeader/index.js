import React from "react";
import {useState} from "react"
import './style.scss';

export default function DropdownHeader () {
  const [showMenu, setShowMenu] = useState(false)

  return (
    <div>
    <button onClick={() => setShowMenu(!showMenu)}>
      Show menu
    </button>

    {
      showMenu
        ? (
          <div className="menu">
            <button>Mon profil</button>
            <button>Administration</button>
            <button>Deconnexion</button>
          </div>
        )
        : (
          null
        )
    }
    </div>
  )
}
