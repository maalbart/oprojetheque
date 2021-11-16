import React from "react";
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProjects } from 'src/actions/projects';
import { Input } from "semantic-ui-react";
import CardProject from "src/components/CardProject";
import Loader from 'src/components/Loader'
import { filteredSearch } from "src/selectors/projects";
import './style.scss';
import ScrollTop from "src/components/ScrollTop";
import { changeSearchProject } from "src/actions/projects";

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
        <p className="projects-description">Tous les projets d'apothéose des étudiants d'O'Clock !</p>
        {/* attention changement action='rechercher' pour icon loupe */}
        <Input
          icon='search'
          placeholder='Rechercher un projet'
          className="projects-searchbar"
          name='rechercher'
          value={search}
          onChange={(event) => {
            event.preventDefault()
            dispatch(changeSearchProject(event.target.value, 'search'))
          }}
        />
      </div>
      <div className="projects-list">
        <div className="projects-list-card" >
          {allProjects.map((allProject) => (
              <CardProject key={allProject.id} {...allProject} />
            ))}
        </div>
      </div>
    <ScrollTop className='scrolltop'/>
    </div>
  )
}
