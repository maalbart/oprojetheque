import { Card, Image } from 'semantic-ui-react'
import PropTypes from 'prop-types'

export default function CardProject ({ 
  name, 
  description, 
  logo,
}) {
  return (
    <Card>
      <Image src={logo} wrapped ui={false} />
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
