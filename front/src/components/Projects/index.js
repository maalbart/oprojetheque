import React from "react";
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProjects } from 'src/actions/projects';
import { Card, Input } from "semantic-ui-react";
import CardProject from "src/components/CardProject";
import Loader from 'src/components/Loader'
import { filteredSearch } from "src/selectors/projects";
import './style.scss';
import { changeSearch } from "src/actions/projects";

export default function Projects () {
  const dispatch = useDispatch();
  const search = useSelector((state) => state.projects.search)
  const allProjects = useSelector((state) => filteredSearch(state.projects.list, search))
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
        <p className="projects-description">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente deserunt libero dicta nesciunt eius commodi fuga voluptate natus reprehenderit voluptates vitae, sit eum? Rem deserunt ea doloremque ex qui labore.
        Possimus cumque et numquam deleniti quas accusamus itaque. Error nemo, totam vitae ipsam ea quo rerum sint eveniet sed dolorem labore natus expedita culpa! Dolor quis fugiat dolore culpa.</p>
        <Input
          placeholder='Rechercher un projet'
          className="projects-searchbar"
          name='rechercher'
          value={search}
          onChange={(event) => {
            event.preventDefault()
            dispatch(changeSearch(event.target.value, 'search'))
          }}
        />
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
