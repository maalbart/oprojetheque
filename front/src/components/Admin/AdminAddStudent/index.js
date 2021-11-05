import { Form, Button, Checkbox, Dropdown } from 'semantic-ui-react'
import './style.scss'

export default function AdminAddStudent () {
  const promos = [ 
    {
      'key': 'Valhalla',
      'text': 'Valhalla',
      'value': 'Valhalla',
    }, {
      'key': 'Astro',
      'text': 'Astro',
      'value': 'Astro',
    }, {
      'key': 'Tipix',
      'text': 'Tipix',
      'value': 'Tipix',
    }
  ]
  return(
    <Form>
      <Form.Group widths='equal'>
        <Form.Field>
          <label>Prénom de l'étudiant</label>
          <input placeholder='Prénom' />
        </Form.Field>
        <Form.Field>
          <label>Nom de l'étudiant</label>
          <input placeholder='Nom' />
        </Form.Field>
      </Form.Group>
      <Form.Group widths='equal'>
        <Form.Field>
          <label>Adresse e-mail</label>
          <input placeholder='Adresse e-mail' type='mail'/>
        </Form.Field>
        <Form.Field>
          <label>Mot de passe provisiore</label>
          <input placeholder='Mot de passe' />
        </Form.Field>
      </Form.Group>
    <Form.Field>
      <Dropdown placeholder='Promotion' label="Promotion de l'étudiant" fluid selection options={promos}/>
    </Form.Field>
    <Button type='submit'>Créer l'étudiant</Button>
  </Form>
  )
};
