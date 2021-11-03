import { Card, Image } from 'semantic-ui-react'
import PropTypes from 'prop-types'
import projectTest from 'src/assets/cookies.png'
import { Link } from 'react-router-dom'

export default function CardStudent ({ 
  id,
  avatar,
  firstname,
  lastname,
  biography
}) {
  return (
    <Card>
      <Link to={`/student/${id}`}>
        <Image src={avatar} wrapped ui={false} />
      </Link>
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
