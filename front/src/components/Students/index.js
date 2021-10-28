import React from "react";
import { Card, Input } from "semantic-ui-react";
import CardProject from "src/components/CardProject";
import './style.scss';

export default function Students () {
  return (
    <div className="students">
      <div className="students-header">
        <h1 className="students-title">Les étudiants</h1>
        <p className="students-description">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente deserunt libero dicta nesciunt eius commodi fuga voluptate natus reprehenderit voluptates vitae, sit eum? Rem deserunt ea doloremque ex qui labore.
        Possimus cumque et numquam deleniti quas accusamus itaque. Error nemo, totam vitae ipsam ea quo rerum sint eveniet sed dolorem labore natus expedita culpa! Dolor quis fugiat dolore culpa.</p>
        <Input action='Rechercher' placeholder='Rechercher un étudiant' className="students-searchbar" />
      </div>
      <div className="students-list">
        <Card.Group 
          itemsPerRow={3}
          stackable
          centered
          className="students-list-card"
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
