import React from "react";
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProjects } from 'src/actions/projects';
import { Card, Input } from "semantic-ui-react";
import CardProject from "src/components/CardProject";
import Loader from 'src/components/Loader'
import './style.scss';

export default function Projects () {
  const dispatch = useDispatch();
  const allProjects = useSelector((state) => state.projects.list)
  console.log(allProjects);
  useEffect(() => {
    dispatch(getAllProjects())
  }, [])
  const loader = useSelector((state) => state.projects.loader);
  if (loader) {
    return <Loader />;
  }
  return (
    <div className="projects">
      <div className="projects-header">
        <h1 className="projects-title">Les projets</h1>
        <p className="projects-description">Tous les projets d'apothéose des étudiants d'O'Clock !</p>
        {/* attention changement action='rechercher' pour icon loupe */}
        <Input icon='search' placeholder='Rechercher un projet' className="projects-searchbar" />
      </div>
      <div className="projects-list">
        <Card.Group 
          itemsPerRow={3}
          stackable
          centered
          className="projects-list-card"
        >
          {allProjects.map((allProject) => (
              <CardProject key={allProject.id} {...allProject} />
            ))}
        </Card.Group>
      </div>
    </div>
  )
}
