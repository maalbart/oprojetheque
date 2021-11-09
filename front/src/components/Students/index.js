import React from "react";
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllStudents } from 'src/actions/students';
import { Card, Input } from "semantic-ui-react";
import CardStudent from "src/components/CardStudent";
import Loader from 'src/components/Loader'
import './style.scss';

export default function Students () {
  const dispatch = useDispatch()
  const allStudents = useSelector((state) => state.students.list)
  console.log(allStudents);
  const loader = useSelector((state) => state.students.loader);
  useEffect(() => {
    dispatch(getAllStudents())
  }, [])
  if (loader) {
    return <Loader />;
  }
  return (
    <div className="students">
      <div className="students-header">
        <h1 className="students-title">Les étudiants</h1>
        <p className="students-description">Tous les étudiants d'O'Clock depuis la création de l'école.</p>
        {/* attention changement action='rechercher' pour icon loupe */}
        <Input icon='search' placeholder='Rechercher un étudiant' className="students-searchbar" />
      </div>
      <div className="students-list">
        <Card.Group 
          itemsPerRow={3}
          stackable
          centered
          className="students-list-card"
        >
          {allStudents.map((allStudent) => (
            <CardStudent key={allStudent.id} {...allStudent} />
          ))}
        </Card.Group>
      </div>
    </div>
  )
}
