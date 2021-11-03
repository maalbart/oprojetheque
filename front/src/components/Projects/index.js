import React from "react";
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProjects } from 'src/actions/projects';
import { Card, Input } from "semantic-ui-react";
import CardProject from "src/components/CardProject";
import './style.scss';

export default function Projects () {
  const dispatch = useDispatch();
  const allProjects = useSelector((state) => state.projects.list)
  console.log(allProjects);
  useEffect(() => {
    dispatch(getAllProjects())
  }, [])
  return (
    <div className="projects">
      <div className="projects-header">
        <h1 className="projects-title">Les projets</h1>
        <p className="projects-description">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente deserunt libero dicta nesciunt eius commodi fuga voluptate natus reprehenderit voluptates vitae, sit eum? Rem deserunt ea doloremque ex qui labore.
        Possimus cumque et numquam deleniti quas accusamus itaque. Error nemo, totam vitae ipsam ea quo rerum sint eveniet sed dolorem labore natus expedita culpa! Dolor quis fugiat dolore culpa.</p>
        <Input action='Rechercher' placeholder='Rechercher un projet' className="projects-searchbar" />
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
