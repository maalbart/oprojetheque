import { Form, Input, Button, Dropdown } from 'semantic-ui-react'
import './style.scss'

export default function AdminAddPromo () {
  
  return (
    <Form>
      <Form.Field
        id='form-input-control-promo-name'
        control={Input}
        label='Nom de la promo'
        placeholder='Nom de la promo'
      />
    <Form.Group widths='equal'>
      <Form.Field
        id='form-input-control-starting-date'
        control={Input}
        type='date'
        label='Date de début'
        placeholder='Date de début'
      />
      <Form.Field
        id='form-input-control-ending-date'
        control={Input}
        type='date'
        label='Date de fin'
        placeholder='Date de Fin'
      />
    </Form.Group>
    <Input
      id='form-input-control-avatar'
      type='file'
      accept='.jpg, .png, .svg'
      label='Avatar de la promotion'
      labelPosition='right'
    />
    <Form.Field
      id='form-button-control-promo'
      control={Button}
      content='Créer la promotion'
    />
  </Form>
  )
};
