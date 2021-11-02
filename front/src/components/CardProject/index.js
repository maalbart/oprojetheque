import { Card, Image } from 'semantic-ui-react'
import PropTypes from 'prop-types'
import projectTest from 'src/assets/cookies.png'

export default function CardProject ({ 
  name, 
  description, 
  date1, 
  date2,
  logo,
}) {
  return (
    <Card>
      <Image src={projectTest} wrapped ui={false} />
      <Card.Content>
        <Card.Header>{name}</Card.Header>
          <Card.Description>
            {description}
          </Card.Description>
          <Card.Meta>
            <span className='date'>{date1}-{date2}</span>
          </Card.Meta>
      </Card.Content>
    </Card>
  )
}

CardProject.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string,
  date1: PropTypes.string,
  date2: PropTypes.string,
  logo: PropTypes.string,
}
