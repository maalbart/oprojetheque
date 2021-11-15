import React from "react";
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllStudents } from 'src/actions/students';
import { Input } from "semantic-ui-react";
import CardStudent from "src/components/CardStudent";
import Loader from 'src/components/Loader'
import { filteredSearch } from "src/selectors/students";
import { changeSearch } from "src/actions/students";
import './style.scss';
import ScrollTop from "src/components/ScrollTop";

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
        <p className="students-description">Tous les étudiants d'O'Clock depuis la création de l'école.</p>
        {/* attention changement action='rechercher' pour icon loupe */}
        <Input
          icon='search'
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
          {allStudents.map((allStudent) => (
            <CardStudent key={allStudent.id} {...allStudent} />
          ))}
      </div>
      <ScrollTop className='scrolltop'/>
    </div>
  )
}
