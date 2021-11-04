import React from "react";
import { NavLink } from 'react-router-dom'
import './style.scss';
import PropTypes from 'prop-types'

export default function AdminButton ({ content }) {
  return (
    <div className="button">
    <NavLink
      to="#"
      activeClassName="selected"
    >
      {content}
    </NavLink>
    </div>
  )
}

AdminButton.propTypes = {
  content: PropTypes.string.isRequired,
}
