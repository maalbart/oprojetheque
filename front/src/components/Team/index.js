import React from 'react'
import CardTeam from "src/components/Team/CardTeam"
import eliasPicture from 'src/assets/puit-amour.png'
import celiaPicture from 'src/assets/pommes-amour.png'
import sophiePicture from 'src/assets/cheesecake.png'
import emilienPicture from 'src/assets/chocolatine.png'
import morganPicture from 'src/assets/cupcake-bleu.png'
import './style.scss'

export default function Team () {
  return (
    
    <div className="team">
      <div className="team-presentation">
        <p className="team-presentation-description">Voici la Team de O'Projethèque !</p>
      </div>
      <div className="team-cards">
            <CardTeam className='team-cards-card' title="Célia" job="Scrum Master" picture={celiaPicture} description="Développeuse back-end spécialité Data/API" linkedin="https://www.linkedin.com/in/c%C3%A9lia-tocqueville-a2985121b/" github="https://github.com/celiatoc" />
            <CardTeam className='team-cards-card' title="Sophie" job="Product Owner" picture={sophiePicture} description="Développeuse back-end spécialité Data/API" linkedin="https://www.linkedin.com/in/sophie-bayram" github="https://github.com/SYB-SFLA" />
            <CardTeam className='team-cards-card' title="Morgan" job="Lead Dev Front" picture={morganPicture} description="Développeuse front-end spécialité React" linkedin="https://www.linkedin.com/in/morgan-v-23660485/" github="https://github.com/maalbart" />
            <CardTeam className='team-cards-card' title="Emilien" job="Git Master" picture={emilienPicture} description="Développeur front-end spécialité React" linkedin="https://www.linkedin.com/in/emilien-boucherie-873518213/" github="https://github.com/Emilien-Boucherie" />
            <CardTeam className='team-cards-card' title="Elias" job="Référent Technique" picture={eliasPicture} description="Développeur back-end spécialité Data/API" linkedin="https://www.linkedin.com/in/elias-gueye-084998225" github="https://github.com/Lucifer-Aeris" />
      </div>
    </div>

  )
}

