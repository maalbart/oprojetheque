import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Button, Dropdown } from 'semantic-ui-react'
import { handleChangeDropdownValue } from 'src/actions/admin'
import './style.scss'

export default function AdminAddProject () {
  const dispatch = useDispatch()
  const promos = useSelector((state) => state.admin.promos)
  console.log(promos.student)
  const dropdownValue = useSelector((state) => state.admin.dropdownValue)
  console.log(dropdownValue)
  const handleChangeValue = (evt) => {
    console.log(evt.target.innerText)
    dispatch(handleChangeDropdownValue(evt.target.innerText))
  }
  const handleChangeList = (dropdownValue) => {
    for (const list of promos) {
      if (list.key == dropdownValue) {
        return list.student
      }
    }
    console.log(list.student)
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
        options={promos}
        value={dropdownValue}
        onChange={handleChangeValue}
      />
    </Form.Field>
    <Form.Field>
      <Dropdown
        placeholder="Nom de l'étudiant"
        label="Etudiant référent du projet"
        fluid
        selection
        allowAdditions
        options={handleChangeList(dropdownValue)}/>
    </Form.Field>
    <Button type='submit'>Créer le projet</Button>
  </Form>
  )
};

