import React from 'react'
import PropTypes from 'prop-types'
import photo from 'src/assets/religieuse.png'
import './style.scss'

export default function CardTeam ({ title, job }) {
  return (
  <div className="card-team">
  <div className="card-team-body">
    <img src={photo} className='card-team-body-img'/>
    <h2 className='card-team-body-title'>{title}</h2>
    <h3 className="card-team-body-job">{job}</h3>
  </div>
  </div>
  )
}

CardTeam.propTypes = {
  title: PropTypes.string.isRequired,
  job: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
}



/* ancienne version card team
<Card>
<Image src={photo} wrapped ui={false} />
<Card.Content>
  <Card.Header>{title}</Card.Header>
  <Card.Meta>{job}</Card.Meta>
  <Card.Description>{description}</Card.Description>
</Card.Content>
</Card> */
