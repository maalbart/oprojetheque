import React from "react";
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Redirect, useParams } from 'react-router-dom'
import CardStudent from "src/components/CardStudent"
import Loader from 'src/components/Loader'
import { getOneProject } from "src/actions/projects"
import ScrollTop from "src/components/ScrollTop"
import './style.scss'


export default function Project () {
  const dispatch = useDispatch()
  const { id } = useParams();
  console.log(id)
  const project = useSelector((state) => (state.projects.oneProject));
  const loader = useSelector((state) => state.projects.loader);
  console.log(project)
  useEffect(() => {
    dispatch(getOneProject(id))
  }, []);
  if (loader) {
    return <Loader />;
  }
  if (!project) {
    return <Redirect to="/error" />;
  }
  return (
    <div className="project">
      <div className="project-content">
        <div className="project-content-header">
          <div className="project-content-header-identity">
            <h1 className="project-content-header-identity-title">{project.projectId.name}</h1>
              <img src={project.projectId.logo} alt="logo du projet" className="project-content-header-img"/>
          </div>
          <div className="project-content-header-promo">
            <h3 className="project-content-header-promo-name">{project.promoFromProject.name}</h3>
            <Link to={`/promo/${project.projectId.id_promo}`} className="project-body-link">
              <img src={project.promoFromProject.logo} alt="logo de la promo" className="project-content-header-promo-img" />
            </Link>
          </div>
        </div>
        <div className="project-body">
          <div className="project-body-left">
            <a href={project.projectId.site_link}> <img src={project.projectId.site_screen} alt="preview du projet" className="project-body-img" /> </a>
          </div>
          <div className="project-body-right">
            <p className="project-body-p">Description du projet :</p>
            <p className="project-body-description">{project.projectId.description}</p>
          </div>
        </div>
        <div className="project-footer">
          <h2 className='project-footer-title'>La team du projet :</h2>
          <div className="project-footer-card">
            {project.studentFromProject.map((student) => (
              <CardStudent key={student.id} {...student} />
            ))}
          </div>
        </div>
      </div>
    <ScrollTop className='scrolltop'/>
    </div>
  )
}



/* ancienne version avec semantic ui 
<Card.Group
itemsPerRow={5}
stackable
centered
className="project-footer-card"
>
{project.studentFromProject.map((student) => (
  <CardStudent key={student.id} {...student} />
))}
</Card.Group> 
*/
