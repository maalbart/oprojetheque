import React from "react";
import './style.scss';

export default function DropdownHeader () {
  const [showMenu, setShowMenu] = usestate(false);

  return (
    <div>
    <button onClick={() => setShowMenu(!showMenu)}>
      Show menu
    </button>

    {
      {showMenu}
        ? (
          <div className="menu">
            <button> Menu item 1 </button>
            <button> Menu item 2 </button>
            <button> Menu item 3 </button>
          </div>
        )
        : (
          null
        )
    }
    </div>
  )
}
