import React from "react";
import './style.scss';
import PropTypes from 'prop-types'

export default function Button ({ content, path }) {
  return (
    <div className="button">
      <a href={path} className="button-text">
      {content}
      </a>
    </div>
  )
}

Button.propTypes = {
  content: PropTypes.string.isRequired,
}
