import React from 'react'
import PropTypes from 'prop-types'
import photo from 'src/assets/religieuse.png'
import './style.scss'

export default function CardTeam ({ title, job, description, picture, linkedin, github }) {
  return (
  <div className="card-team">
  <div className="card-team-body">
    <img src={picture} className='card-team-body-img'/>
    <h2 className='card-team-body-title'>{title}</h2>
    <h3 className="card-team-body-job">{job}</h3>
    <p className='card-team-body-desc'>{description}</p>
    <div>
      <a href={github}><i class="big inverted grey github square icon"></i></a>
      <a href={linkedin}><i class="big inverted grey linkedin square icon"></i></a>
    </div>
  </div>
  </div>
  )
}

CardTeam.propTypes = {
  title: PropTypes.string.isRequired,
  job: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  linkedin: PropTypes.string.isRequired,
  github: PropTypes.string.isRequired,
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
