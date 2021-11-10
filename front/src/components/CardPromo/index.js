/* import { Card, Image } from 'semantic-ui-react' */ 
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import './style.scss'

export default function CardPromo ({ 
  id,
  name, 
  starting_date, 
  ending_date,
  logo,
}) 

{
  return (
  <Link to={`/promo/${id}`}>
   <div className="card">
     <div className="card-body">
       <img src={logo} />
       <h3 className="card-title">{name}</h3>
       <p className="card-description">{starting_date} - {ending_date}</p>
     </div>
   </div>
  </Link>
  )
}

CardPromo.propTypes = {
  name: PropTypes.string.isRequired,
  starting_date: PropTypes.string,
  ending_date: PropTypes.string,
  logo: PropTypes.string,
}



// ancienne card utilisant semantic ui 

/*     <Card className='cardi'>
    <Link to={`/promo/${id}`}>
      <Image src={logo} wrapped ui={false} />
    </Link>
      <Card.Content className='card-content'>
        <Card.Header className='card-content-header'>{name}</Card.Header>
          <Card.Meta>
            <span className='date'>{starting_date} - {ending_date}</span>
          </Card.Meta>
      </Card.Content> 
    </Card> */
   