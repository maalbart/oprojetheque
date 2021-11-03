import { Card, Image } from 'semantic-ui-react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export default function CardPromo ({ 
  id,
  name, 
  starting_date, 
  ending_date,
  logo,
}) {
  return (
    <Card>
    <Link to={`/promo/${id}`}>
      <Image src={logo} wrapped ui={false} />
    </Link>
      <Card.Content>
        <Card.Header>{name}</Card.Header>
          <Card.Meta>
            <span className='date'>{starting_date} - {ending_date}</span>
          </Card.Meta>
      </Card.Content>
    </Card>
  )
}

CardPromo.propTypes = {
  name: PropTypes.string.isRequired,
  starting_date: PropTypes.string,
  ending_date: PropTypes.string,
  logo: PropTypes.string,
}
