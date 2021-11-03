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
    <Card>
      <Link to={`/project/${id}`}>
        <Image src={logo} wrapped ui={false} />
      </Link>
      <Card.Content>
        <Card.Header>{name}</Card.Header>
          <Card.Description>
            {description}
          </Card.Description>
      </Card.Content>
    </Card>
  )
}

CardProject.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string,
  logo: PropTypes.string,
}
