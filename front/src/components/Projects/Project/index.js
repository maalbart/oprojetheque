import React from "react";
import { Card } from "semantic-ui-react";
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import { findProject } from 'src/selectors/projects'
import { Link } from 'react-router-dom'
import Button from "src/components/Button";
import { Redirect, useLocation, useParams } from 'react-router-dom';
import CardProject from "src/components/CardProject";
import './style.scss'

export default function Project () {
  const { id } = useParams();
  console.log(id)
  const project = useSelector((state) => findProject(state.projects.list, id));
  console.log(project)
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  if (!project) {
    return <Redirect to="/error" />;
  }
  return (
    <div className="project">
      <div className="project-content">
        <div className="project-content-header">
          <div className="project-content-header-identity">
            <h1 className="project-content-header-title">{project.name}</h1>
              <img src={project.logo} alt="logo du projet" className="project-content-header-img"/>
          </div>
          <div className="project-content-header-promo">
            <h3 className="project-content-header-promo-name">Nom de la promo</h3>
            <Link to={`/promo/${project.id_promo}`} className="project-body-link">
              <img src="" alt="logo de la promo" className="project-content-header-promo-img" />
            </Link>
          </div>
        </div>
        <div className="project-body">
          <div className="project-body-left">
            <img src="" alt="preview du projet" className="project-body-img" />
            <a href="#" className="project-body-link">{project.name}</a>
            {/* <Button content="Se rattacher au projet" className="project-body-button"/> */}
          </div>
          <div className="project-body-right">
            <p className="project-body-p">Description du projet</p>
            <p className="project-body-description">{project.description}</p>
          </div>
        </div>
        <div className="project-footer">
          <Card.Group
            itemsPerRow={5}
            stackable
            centered
            className="project-footer-card"
          >
            <CardProject name="Alex Cité"/>
            <CardProject name="Jean Cérien"/>
            <CardProject name="Gérard Manvussa"/>
            <CardProject name="Ali Gator"/>
            <CardProject name="Edith Orial"/>
          </Card.Group>
        </div>
      </div>
    </div>
  )
}
