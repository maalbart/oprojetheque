import React from 'react'
import CardTeam from "src/components/Team/CardTeam"
import './style.scss'

export default function Team () {
  return (
    
    <div className="team">
      <div className="team-presentation">
        <p className="team-presentation-description">Voici la Team de O'Projetheque !</p>
      </div>
      <div className="team-cards">
            <CardTeam className='team-cards-card' title="Celia" job="Scrum Master"/>
            <CardTeam className='team-cards-card' title="Sophie" job="Product Owner"/>
            <CardTeam className='team-cards-card' title="Morgan" job="Lead Dev Front"/>
            <CardTeam className='team-cards-card' title="Emilien" job="Referent Technique"/>
            <CardTeam className='team-cards-card' title="Elias" job="Git Master"/>
      </div>
    </div>

  )
}
