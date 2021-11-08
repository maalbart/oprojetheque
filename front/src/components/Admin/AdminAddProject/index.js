import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Button, Dropdown } from 'semantic-ui-react'
import { handleChangeDropdownValue, adminGetAllPromos, adminGetStudentsFromPromo } from 'src/actions/admin'
import Loader from 'src/components/Loader';
import './style.scss'

export default function AdminAddProject () {
  const dispatch = useDispatch()
  const promos = useSelector((state) => state.admin.promos)

  const promo = promos.map(onePromo => ({
    value: onePromo.name, key: onePromo.id, text: onePromo.name
  }))
  const students = useSelector((state) => state.admin.studentsFromPromo)
  const dropdownValue = useSelector((state) => state.admin.dropdownValue)
  const loader = useSelector((state) => state.admin.loader);

  const handleChangeValue = (evt) => {
    const idPromo = promo.find(element => element.value == evt.target.textContent)
    dispatch(handleChangeDropdownValue(idPromo.key))
  }

  const handleChangeList = (dropdownValue) => {
    const studentList = students.map((student) => {
      if (student.id_promo == dropdownValue) {
        return { key: student.id, value: student.firstname + ' ' + student.lastname, text: student.firstname + ' ' + student.lastname  }
      }
    })
    return studentList
  };

  useEffect(() => {
    dispatch(adminGetAllPromos())
    dispatch(adminGetStudentsFromPromo())
  }, [])

  if (loader) {
    return <Loader />;
  }

  return (
    <Form>
    <Form.Field>
      <label>Nom du projet</label>
      <input placeholder='Nom du projet' />
    </Form.Field>
    <Form.Field>
      <Dropdown
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
        placeholder="Nom de l'étudiant"
        label="Etudiant référent du projet"
        fluid
        selection
        options={handleChangeList(dropdownValue)}
      />
    </Form.Field>
    <Button type='submit'>Créer le projet</Button>
  </Form>
  )
};
