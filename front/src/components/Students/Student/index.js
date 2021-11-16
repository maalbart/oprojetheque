import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import './style.scss'
import { Redirect, useParams, Link } from 'react-router-dom';
import { getOneStudent } from 'src/actions/students';
import Loader from 'src/components/Loader';


export default function Student () {
  const dispatch = useDispatch()
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
  return (
    <div className="student">
      <div className="student-header">
          <img src={student.studentId.avatar} alt="avatar de student" className="student-header-img"/>
          <h2 className="student-header-name">{student.studentId.firstname} {student.studentId.lastname}</h2>
          <p className="student-header-description">{student.studentId.biography}</p>
          
      </div>
      <div className="student-body">
        <div className="student-body-promo">
          <h3 className="student-body-titles">Promotion</h3>
          <p className="student-body-promo-name">{student.promoFromStudent[0].name}</p>
          <Link to={`/promo/${student.promoFromStudent[0].id_promo}`} >
            <img src={student.promoFromStudent[0].logo} alt="logo promotion" className="student-body-logo-promo"/>
          </Link>
        </div>
        <div className="student-body-projet">
          <h3 className="student-body-titles">Projet</h3>
          <p className="student-body-project-name">{student.projectFromStudent[0].name}</p>
          <Link to={`/project/${student.projectFromStudent[0].id_project}`} >
            <img src={student.projectFromStudent[0].logo} alt="logo project" className="student-body-logo-project" />
          </Link>
        </div>
        {/* <div className="student-body-stack">
          <h3 className="student-body-titles">Stack Technique</h3> 
        </div>
        <div className="student-body-social">
          <h3 className="student-body-titles">Reseaux Sociaux</h3>
        </div> */}
      </div>
    </div>
  )
}

