import React from "react";
import { NavLink } from 'react-router-dom'
import './style.scss';
import PropTypes from 'prop-types'

export default function Button ({ content, path }) {
  return (
    <div className="button">
    <NavLink 
      to={path}
      activeClassName="selected"
    >
      {content}
    </NavLink>
    </div>
  )
}

Button.propTypes = {
  content: PropTypes.string.isRequired,
}
