import React from "react";
import { Card } from "semantic-ui-react";
import logo from 'src/assets/logo-principal.png'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRandomProjects } from 'src/actions/projects';
import CardProject from "src/components/CardProject";
import Loader from 'src/components/Loader'
import ScrollTop from "src/components/ScrollTop";
import './style.scss';

export default function Homepage () {
  const dispatch = useDispatch()
  const projectsRandom = useSelector((state) => state.projects.list)
  console.log(projectsRandom);
  const loader = useSelector((state) => state.projects.loader);
  useEffect(() => {
    dispatch(getRandomProjects())
  }, [])
  if (loader) {
    return <Loader />;
  }
  return (
    <div className="homepage">
      <div className="homepage-presentation">
            <img src={logo} alt="logo-principal" className="homepage-presentation-logo"/>
        <p className="homepage-presentation-description"> Bienvenue sur notre site ! <br />
        Il regroupe les projets de fin de formation des étudiants de l’école O’Clock, connus sous le nom d’Apothéose. <br />
        Vous y trouverez également les étudiants et les promotions. </p>
      </div>
      <div className="homepage-suggest">
        <Card.Group 
          itemsPerRow={5}
          stackable
          centered
          className="homepage-suggest-cards"
        >
          {projectsRandom.map((projectRandom) => (
            <CardProject key={projectRandom.id} {...projectRandom} />
          ))}
        </Card.Group>
      </div>
    <ScrollTop className='scrolltop'/>
    </div>
  )
}
