import React from 'react'
import './style.scss'
import { Button } from 'semantic-ui-react'
/* import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { Redirect, useParams, Link } from 'react-router-dom';
import { getOneStudent } from 'src/actions/students';
import Loader from 'src/components/Loader'; */


export default function Profile () {
/*   const dispatch = useDispatch()
  const { id } = useParams();
  console.log(id)
  const student = useSelector((state) => (state.students.oneStudent));
  console.log(student)
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
  return ( */
    <div className="profile">
      <div className="profile-body">
          <h2 className="profile-body-title">Avatar</h2>
          <img src='' alt="avatar" className="profile-body-img"/>
          <Button type='submit'>Envoyer l'avatar</Button>
          <h2 className="profile-body-title">Bio</h2>
          <p className="profile-header-description">Lorem ipsum blabla</p>
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
          <p className="profile">Quitter le projet</p>
        </div>
        <div className="profile-footer-stack">
          <h3 className="profile-footer-title">Stack technique</h3>
          <p>React</p>
          <p>Data</p>
        </div>
      </div>
    </div>
}

