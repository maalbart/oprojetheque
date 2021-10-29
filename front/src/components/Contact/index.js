import React from "react";
import { Form } from 'semantic-ui-react'
import './style.scss';

export default function Contact () {
  return (
    <div className="contact-form">
      <h2>Nous contacter</h2>
      <Form>
        <Form.Input type="email" label='Votre e-mail' placeholder='E-mail' />
        <Form.TextArea placeholder='Votre message' />
        <Form.Button>Envoyer</Form.Button>
      </Form>
    </div>
  )
}
