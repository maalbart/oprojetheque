import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Button, Dropdown, Input } from 'semantic-ui-react'
import { handleChangeDropdownValue, adminGetAllPromos, adminGetStudentsFromPromo, changeField } from 'src/actions/admin'
import Loader from 'src/components/Loader';
import './style.scss'

export default function AdminAddProject () {
  const dispatch = useDispatch()
  // const promos = useSelector((state) => state.admin.promos)
  const {
    promos,
    students,
    dropdownValue,
    loader,
    projectName,
    selectedPromo,
    selectedStudent
  } = useSelector((state) => ({
    promos: state.admin.promos,
    students: state.admin.studentsFromPromo,
    dropdownValue: state.admin.dropdownValue,
    loader: state.admin.loader,
    projectName: state.admin.projectName,
    selectedPromo: state.admin.selectedPromo,
    selectedStudent: state.admin.selectedStudent
  }))

  const promo = promos.map(onePromo => ({
    value: onePromo.name, key: onePromo.id, text: onePromo.name
  }))
  // const students = useSelector((state) => state.admin.studentsFromPromo)
  // const dropdownValue = useSelector((state) => state.admin.dropdownValue)
  // const loader = useSelector((state) => state.admin.loader);


  const handleChangeValue = (evt) => {
    const idPromo = promo.find(element => element.value == evt.target.textContent)
    console.log(idPromo)
    dispatch(handleChangeDropdownValue(idPromo.key))
  }

  const handleAddProject = (evt) => {
    evt.preventDefault();
    console.log(evt);
  }

  // console.log(dropdownValue)
  const handleChangeList = (dropdownValue) => {
    const studentList = students.filter((student) => {
      if (student.id_promo == dropdownValue) {
        return { key: student.id, value: student.firstname + ' ' + student.lastname, text: student.firstname + ' ' + student.lastname  }
      }
    })
    const studentOptions = studentList.map((student) => ({
      key: student.id, value: student.firstname + ' ' + student.lastname, text: student.firstname + ' ' + student.lastname
    }))
    console.log(studentOptions)
    return studentOptions
  };
  
  useEffect(() => {
    dispatch(adminGetAllPromos())
    dispatch(adminGetStudentsFromPromo())
  }, [])

  if (loader) {
    return <Loader />;
  }

  return (
    <Form onSubmit={handleAddProject}>
    <Form.Field>
      <input
        type='text'
        label='Nom du projet'
        placeholder='Nom du projet'
        name='projectName'
        value={projectName}
        onChange={(event) => {
          dispatch(changeField(event.target.value, 'projectName'))
        }}
      />
    </Form.Field>
    <Form.Field>
      <Dropdown
        label='Promotion'
        placeholder='Promotion'
        label="Promotion de l'étudiant"
        fluid
        selection
        options={promo}
        text={promo.text}
        value={promo.key}
        onChange={handleChangeValue}
      />
    </Form.Field>
    <Form.Field>
      <Dropdown
        label='Etudiant référent'
        placeholder="Nom de l'étudiant"
        label="Etudiant référent du projet"
        fluid
        selection
        options={handleChangeList(dropdownValue)}
        text={promo.text}
        value={promo.key}
      />
    </Form.Field>
    <Button type='submit'>Créer le projet</Button>
  </Form>
  )
};
