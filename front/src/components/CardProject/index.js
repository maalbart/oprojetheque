import { Card, Image } from 'semantic-ui-react'
import PropTypes from 'prop-types'
import projectTest from 'src/assets/cookies.png'

export default function CardProject ({ 
  name, 
  description, 
  starting_date, 
  ending_date,
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
            <span className='date'>{starting_date} - {ending_date}</span>
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
