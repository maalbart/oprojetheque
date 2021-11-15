import React from 'react'
import './style.scss'
import { Button } from 'semantic-ui-react'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { Redirect, useParams, Link } from 'react-router-dom';
import { getOneStudent } from 'src/actions/students';
import Loader from 'src/components/Loader';


export default function Profile () {
  const dispatch = useDispatch()
  const id = useSelector((state) => state.user.id)
  console.log(id)
  const student = useSelector((state) => (state.students.oneStudent));
  console.log(student.projectFromStudent[0].id)
  const loader = useSelector((state) => state.students.loader)
  useEffect(() => {
    dispatch(getOneStudent(id))
  }, []);
  if (loader) {
    return <Loader />
  }
  if (!student) {
    return <Redirect to="/error" />;
  }
  return ( 
    <div className="profile">
      <h1>{student.studentId.firstname} {student.studentId.lastname}</h1>
      <div className="profile-body">
          <h2 className="profile-body-title">Avatar</h2>
          <img src={student.studentId.avatar} alt="avatar" className="profile-body-img"/>
          <Button type='submit'>Envoyer l'avatar</Button>
          <h2 className="profile-body-title">Bio</h2>
          <p className="profile-header-description">{student.studentId.biography}</p>
          <Button type='submit'>Editer mes informations</Button>
          <h2 className="profile-body-title">Reseaux sociaux</h2>
          <div className="profile-body-icons">
            <i class="big inverted grey twitter icon"></i>
            <i class="big inverted grey github square icon"></i>
            <i class="big inverted grey envelope icon"></i>
          </div>
      </div>
      <div className="profile-footer">
        <div className="profile-footer-projet">
          <h3 className="profile-footer-title">Projet</h3>
          <Link to={`/project/${student.projectFromStudent[0].id_project}`}><img src={student.projectFromStudent[0].logo} alt="Logo du projet" className="profile-footer-logo" /></Link>
        </div>
        <div className="profile-footer-stack">
          <h3 className="profile-footer-title">Stack technique</h3>
          <p>React</p>
          <p>Data</p>
        </div>
      </div>
    </div>
  )
}

