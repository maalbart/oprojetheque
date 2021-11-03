import { Card, Image } from 'semantic-ui-react'
import PropTypes from 'prop-types'
import projectTest from 'src/assets/cookies.png'

export default function CardStudent ({ 
  avatar,
  firstname,
  lastname,
  biography
}) {
  return (
    <Card>
      <Image src={projectTest} wrapped ui={false} />
      <Card.Content>
        <Card.Header>{firstname} {lastname}</Card.Header>
          <Card.Description>
            {biography}
          </Card.Description>
      </Card.Content>
    </Card>
  )
}

CardStudent.propTypes = {
  firstname: PropTypes.string.isRequired,
  lastname: PropTypes.string.isRequired,
  biography: PropTypes.string,
  avatar: PropTypes.string,
}
