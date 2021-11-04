import React from 'react'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import { findStudent } from 'src/selectors/students'
import './style.scss'
import { Redirect, useLocation, useParams } from 'react-router-dom';


export default function Student () {
  const { id } = useParams();
  console.log(id)
  const student = useSelector((state) => findStudent(state.students.list, id));
  console.log(student)
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  if (!student) {
    return <Redirect to="/error" />;
  }
  return (
    <div className="student">
      <div className="student-header">
          <img src={student.avatar} alt="avatar de student" className="student-header-img"/>
          <p className="student-header-description">{student.biography}</p>
          <h2>{student.firstname} {student.lastname}</h2>
      </div>
      <div className="student-body">
          <h3 className="student-body-titles">Promotion</h3> 
          <h3 className="student-body-titles">Projet</h3> 
          <h3 className="student-body-titles">Stack Technique</h3> 
          <h3 className="student-body-titles">Reseaux Sociaux</h3>
      </div>
    </div>
  )
}

// h1 = { name } a rajouter
