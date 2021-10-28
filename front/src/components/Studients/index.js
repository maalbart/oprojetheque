import React from "react";
import { Card, Input } from "semantic-ui-react";
import CardProject from "src/components/CardProject";
import './style.scss';

export default function Studients () {
  return (
    <div className="studients">
      <div className="studients-header">
        <h1 className="studients-title">Les étudiants</h1>
        <p className="studients-description">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente deserunt libero dicta nesciunt eius commodi fuga voluptate natus reprehenderit voluptates vitae, sit eum? Rem deserunt ea doloremque ex qui labore.
        Possimus cumque et numquam deleniti quas accusamus itaque. Error nemo, totam vitae ipsam ea quo rerum sint eveniet sed dolorem labore natus expedita culpa! Dolor quis fugiat dolore culpa.</p>
        <Input action='Rechercher' placeholder='Rechercher un étudiant' className="studients-searchbar" />
      </div>
      <div className="studients-list">
        <Card.Group 
          itemsPerRow={3}
          stackable
          centered
          className="studients-list-card"
        >
          <CardProject title="Projet 1" description="description du projet" />
          <CardProject title="Projet 2" description="description du projet" />
          <CardProject title="Projet 3" description="description du projet" />
          <CardProject title="Projet 4" description="description du projet" />
          <CardProject title="Projet 5" description="description du projet" />
        </Card.Group>
      </div>
    </div>
  )
}
