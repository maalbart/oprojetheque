import { Card } from 'semantic-ui-react'
import PropTypes from 'prop-types'
import projectTest from 'src/assets/cookies.png'

export default function CardProject ({ title, description}) {
  return (
    <Card>
      <div class="ui card">
        <a class="image" href="#">
          <img src={projectTest} />
        </a>
        <div class="content">
          <a class="header" href="#">{title}</a>
          <div class="meta">
            <a>{description}</a>
          </div>
        </div>
      </div>
    </Card>
  )
}

CardProject.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
}
