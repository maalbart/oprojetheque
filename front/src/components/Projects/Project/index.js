import React from "react";
import { Card } from "semantic-ui-react";
import Button from "src/components/Button";
import CardProject from "src/components/CardProject";
import './style.scss'

export default function Project () {
  return (
    <div className="project">
      <div className="project-content">
        <div className="project-content-header">
          <div className="project-content-header-identity">
            <h1 className="project-content-header-title">Nom du projet</h1>
            <img src="" alt="logo du projet" className="project-content-header-img"/>
          </div>
          <div className="project-content-header-promo">
            <h3 className="project-content-header-promo-name">Nom de la promo</h3>
            <img src="" alt="logo de la promo" className="project-content-header-promo-img" />
          </div>
        </div>
        <div className="project-body">
          <div className="project-body-left">
            <img src="" alt="preview du projet" className="project-body-img" />
            <a href="#" className="project-body-link">Nom du projet</a>
            <Button content="Se rattacher au projet" className="project-body-button"/>
          </div>
          <div className="project-body-right">
            <p className="project-body-p">Description du projet</p>
            <p className="project-body-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, repellat laborum dolor error vitae placeat, blanditiis hic iste temporibus numquam suscipit delectus quis reprehenderit quibusdam, aspernatur similique libero odit? Dolor.
            Quos tempore quam asperiores minus minima doloribus explicabo, optio est numquam, dolorum vitae quia quisquam nobis libero a laboriosam voluptatum dignissimos! Dignissimos doloremque inventore, voluptates porro neque deleniti ab vitae.
            Quaerat maiores veritatis sapiente et doloremque accusamus eius incidunt cupiditate molestiae provident, perspiciatis nesciunt recusandae deleniti nihil eum iusto aut cumque velit quas iste vitae? Aliquid voluptate ea distinctio necessitatibus.
            Voluptatibus neque veniam nemo assumenda, vel inventore possimus in beatae debitis. Est adipisci laborum dolorem, inventore cumque deleniti illo perferendis officia et magnam mollitia! Quas debitis expedita enim cum est.</p>
          </div>
        </div>
        <div className="project-footer">
          <Card.Group
            itemsPerRow={5}
            stackable
            centered
            className="project-footer-card"
          >
            <CardProject title="Alex Cité"/>
            <CardProject title="Jean Cérien"/>
            <CardProject title="Gérard Manvussa"/>
            <CardProject title="Ali Gator"/>
            <CardProject title="Edith Orial"/>
          </Card.Group>
        </div>
      </div>
    </div>
  )
}
