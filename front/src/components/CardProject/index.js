import { Card, Image } from 'semantic-ui-react'
import PropTypes from 'prop-types'
import projectTest from 'src/assets/cookies.png'

export default function CardProject ({ title, description}) {
  return (
    <Card>
      <Image src={projectTest} wrapped ui={false} />
      <Card.Content>
        <Card.Header>{title}</Card.Header>
        <Card.Description>
          {description}
        </Card.Description>
      </Card.Content>
    </Card>
  )
}

CardProject.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
}
