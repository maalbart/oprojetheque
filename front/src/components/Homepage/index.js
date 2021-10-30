import React from "react";
import { Card } from "semantic-ui-react";
import logo from 'src/assets/logo-principal.png'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRandomProjects } from 'src/actions/projects';
import CardProject from "src/components/CardProject";
import './style.scss';

export default function Homepage () {
  const dispatch = useDispatch()
  const projectsRandom = useSelector((state) => state.projects.list)
  console.log(projectsRandom);
  useEffect(() => {
    dispatch(getRandomProjects())
  }, [])
  return (
    <div className="homepage">
      <div className="homepage-presentation">
            <img src={logo} alt="logo-principal" className="homepage-presentation-logo"/>
        <p className="homepage-presentation-description">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente deserunt libero dicta nesciunt eius commodi fuga voluptate natus reprehenderit voluptates vitae, sit eum? Rem deserunt ea doloremque ex qui labore.
        Possimus cumque et numquam deleniti quas accusamus itaque. Error nemo, totam vitae ipsam ea quo rerum sint eveniet sed dolorem labore natus expedita culpa! Dolor quis fugiat dolore culpa.</p>
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
    </div>
  )
}
