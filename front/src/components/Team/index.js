import React from 'react'
// a faire import Header from 'src/components/Header'
// a faire import Footer from 'src/components/Footer'
// import team card
import CardTeam from "src/components/Team/CardTeam"
import './style.scss'

export default function Team () {
  return (
    
    <div className="team">
      <div className="team-presentation">
        <p className="team-presentation-description">Voici la Team de O'Projetheque !</p>
      </div>
      <div className="team-cards">
          <CardTeam title="Celia" job="Scrum Master" description="Blabla"/>
          <CardTeam title="Sophie" job="Product Owner" description="Blabla"/>
          <CardTeam title="Morgan" job="Lead Dev Front" description="Blabla"/>
          <CardTeam title="Emilien" job="Referent Technique" description="Blabla"/>
          <CardTeam title="Elias" job="Git Master" description="Blabla"/>
      </div>
    </div>

  )
}
