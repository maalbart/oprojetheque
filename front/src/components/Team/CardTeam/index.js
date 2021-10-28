import React from 'react'
import PropTypes from 'prop-types'
import { Card, Image } from 'semantic-ui-react'
import photo from 'src/assets/religieuse.png'

export default function CardTeam ({ title, job, description }) {
  return (
  <Card>
    <Image src={photo} wrapped ui={false} />
    <Card.Content>
      <Card.Header>{title}</Card.Header>
      <Card.Meta>{job}</Card.Meta>
      <Card.Description>{description}</Card.Description>
    </Card.Content>
  </Card>
  )
}

CardTeam.propTypes = {
  title: PropTypes.string.isRequired,
  job: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
}

// ajout lien git ou pas auquel cas rajout content extra avec modif icon pour icon git
