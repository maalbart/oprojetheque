import React from 'react'
import { Card } from 'semantic-ui-react'
import CardProject from "src/components/CardProject"
import Button from "src/components/Button"
import './style.scss'

export function Promo () {
    return (
      <div className="promo">
        <div className="promo-content">
            <div className="promo-content-header-identity">
                <img src="" alt="logo de la promo" className="promo-content-header-identity-img"/>
            </div>
            <div className="promo-content-header-description">
                <h1 className="promo-content-header-description-title">Nom de la promo</h1>
                <h2 className="promo-content-header-description-date">Du XX/XX/XX au XX/XX/XX</h2>
                <h3 className="promo-content-header-description-referent">Referent = Simon</h3>
            </div>
            <Button content="Projets/Etudiants" className="promo-button"/>
            <div className="promo-content-body">
                <Card.Group
                itemsPerRow={5}
                stackable
                centered
                className="project-footer-card">
                <CardProject title="Alex Cité" />
                <CardProject title="Jean Cérien" />
                <CardProject title="Gérard Manvussa" />
                <CardProject title="Ali Gator" />
                <CardProject title="Edith Orial" />
                </Card.Group>
            </div>
        </div>
    </div>
    )
}
