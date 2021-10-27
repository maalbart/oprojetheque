import React from "react";
import './style.scss';
import PropTypes from 'prop-types'

export default function Button ({ content }) {
  return (
    <div className="button">
      <a href="#" className="button-text">
      {content}
      </a>
    </div>
  )
}

Button.propTypes = {
  content: PropTypes.string.isRequired,
}
