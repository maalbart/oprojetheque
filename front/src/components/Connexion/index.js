import React from "react";
import { Button, Checkbox, Form } from "semantic-ui-react";

export default function Connexion () {
  return (
    <Form>
      <Form.Field>
        <label>Adresse e-mail</label>
        <input type="email" placeholder='Adresse e-mail' />
      </Form.Field>
      <Form.Field>
        <label>Mot de passe</label>
        <input type="password" placeholder='Mot de passe' />
      </Form.Field>
      <Form.Field>
        <Checkbox label='Se souvenir de ma session' />
      </Form.Field>
      <Button type='submit'>Soumettre</Button>
    </Form>
  )
}

// se souvenir de ma session ou autre ? a voir 
