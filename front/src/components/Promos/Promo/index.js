import React from 'react'
import { Card } from 'semantic-ui-react'
import CardProject from "src/components/CardProject"
import Button from "src/components/Button"
import './style.scss'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import { findPromo } from 'src/selectors/promos'
import { Redirect, useLocation, useParams } from 'react-router-dom';


export function Promo () {
  const { id } = useParams();
  const promo = useSelector((state) => findPromo(state.promos.list, id));
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  if (!promo) {
    return <Redirect to="/error" />;
  }
    return (
      <div className="promo">
        <div className="promo-content">
          <div className='promo-content-header'>
            <div className="promo-content-header-identity">
                <img src={promo.logo} alt="logo de la promo" className="promo-content-header-identity-img"/>
            </div>
            <div className="promo-content-header-description">
                <h1 className="promo-content-header-description-title">{promo.name}</h1>
                <h2 className="promo-content-header-description-date"> {promo.starting_date} - {promo.ending_date} </h2>
                <h3 className="promo-content-header-description-referent">Référent : Simon</h3>
            </div>
          </div>
            {/* <Button content="Projets/Etudiants" className="promo-button"/> */}
            <div className="promo-content-body">
                <Card.Group
                itemsPerRow={5}
                stackable
                centered
                className="project-footer-card">
                  <CardProject name="Alex Cité" />
                  <CardProject name="Jean Cérien" />
                  <CardProject name="Gérard Manvussa" />
                  <CardProject name="Ali Gator" />
                  <CardProject name="Edith Orial" />
                </Card.Group>
            </div>
        </div>
      </div>
    )
}
