import React from 'react'
import './style.scss'
import projectTest from 'src/assets/cookies.png'


export default function Student () {    
  return (
    <div className="student">
      <div className="student-header">
          <h1>Bienvenue sur le profil de...</h1>
          <img src={projectTest} alt="avatar de student" className="student-header-img"/>
          <p className="student-header-description">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus natus numquam doloremque quas adipisci facere ea sit deserunt sunt nulla. Harum veniam eum exercitationem nisi asperiores nesciunt tempora ratione officiis!</p>
          <h2>Cupcake Chocolat</h2>
      </div>
      <div className="student-body">
          <h3 className="student-body-titles">Promotion</h3> 
          <h3 className="student-body-titles">Projet</h3> 
          <h3 className="student-body-titles">Stack Technique</h3> 
          <h3 className="student-body-titles">Reseaux Sociaux</h3>
      </div>
    </div>
  )
}

// h1 = { name } a rajouter
