import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import './style.scss'

export default function CardStudent ({ 
  id,
  avatar,
  firstname,
  lastname,
  biography
}) {
  return (
  <Link to={`/student/${id}`}>
   <div className="card-student">
     <div className="card-student-body">
       <img src={avatar} className="card-student-body-avatar"/>
       <div className="card-student-body-text">
       <h3 className="card-student-body-title">{firstname} {lastname}</h3>
       <p className="card-student-body-description">{biography}</p>
       </div>
     </div>
   </div>
  </Link>
  )
}

CardStudent.propTypes = {
  firstname: PropTypes.string.isRequired,
  lastname: PropTypes.string.isRequired,
  biography: PropTypes.string,
  avatar: PropTypes.string,
}


/*  ancienne version card avec semantic ui 
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
*/
