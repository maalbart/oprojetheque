import React from "react";
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllStudents } from 'src/actions/students';
import { Card, Input } from "semantic-ui-react";
import CardStudent from "src/components/CardStudent";
import Loader from 'src/components/Loader'
import './style.scss';
import { filteredSearch } from "src/selectors/students";
import { changeSearch } from "src/actions/students";


export default function Students () {
  const dispatch = useDispatch()
  const search = useSelector((state) => state.students.search)
  const allStudents = useSelector((state) => filteredSearch(state.students.list, search))
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
        <p className="students-description">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente deserunt libero dicta nesciunt eius commodi fuga voluptate natus reprehenderit voluptates vitae, sit eum? Rem deserunt ea doloremque ex qui labore.
        Possimus cumque et numquam deleniti quas accusamus itaque. Error nemo, totam vitae ipsam ea quo rerum sint eveniet sed dolorem labore natus expedita culpa! Dolor quis fugiat dolore culpa.</p>
        <Input
          name='rechercher'
          placeholder='Rechercher un étudiant'
          className="students-searchbar"
          value={search}
          onChange={(event) => {
            event.preventDefault()
            dispatch(changeSearch(event.target.value, 'search'))
          }}
        />
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
