import { Card, Image } from 'semantic-ui-react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export default function CardProject ({ 
  id,
  name, 
  description, 
  logo,
}) {
  return (
  <Link to={`/project/${id}`}>
  <div className="card">
    <div className="card-body">
      <img src={logo} className='card-img'/>
      <h3 className="card-title">{name}</h3>
      <p className="card-description">{description}</p>
    </div>
  </div>
  </Link>
  )
}

CardProject.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string,
  logo: PropTypes.string,
}
