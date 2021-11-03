import React from "react";
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllStudents } from 'src/actions/students';
import { Card, Input } from "semantic-ui-react";
import CardStudent from "src/components/CardStudent";
import './style.scss';

export default function Students () {
  const dispatch = useDispatch()
  const allStudents = useSelector((state) => state.students.list)
  console.log(allStudents);
  useEffect(() => {
    dispatch(getAllStudents())
  }, [])
  return (
    <div className="students">
      <div className="students-header">
        <h1 className="students-title">Les étudiants</h1>
        <p className="students-description">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente deserunt libero dicta nesciunt eius commodi fuga voluptate natus reprehenderit voluptates vitae, sit eum? Rem deserunt ea doloremque ex qui labore.
        Possimus cumque et numquam deleniti quas accusamus itaque. Error nemo, totam vitae ipsam ea quo rerum sint eveniet sed dolorem labore natus expedita culpa! Dolor quis fugiat dolore culpa.</p>
        <Input action='Rechercher' placeholder='Rechercher un étudiant' className="students-searchbar" />
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
