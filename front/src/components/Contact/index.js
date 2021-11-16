import React from "react"
import axios from "axios"
import { Form } from 'semantic-ui-react'
import { submitContact, changeContactField } from "src/actions/contact"
import { useDispatch, useSelector } from "react-redux"
import './style.scss'

export default function Contact () {
  const dispatch = useDispatch()
  const { email, message, status } = useSelector((state) => ({
    email: state.contact.email,
    message: state.contact.message,
    status: state.contact.status
  }))
  const submitContactForm = (evt) => {
    evt.preventDefault();
    console.log(evt)
    dispatch(submitContact())
  }
  return (
    <div className="contact-form">
      <h2 className="contact-form-title">Nous contacter</h2>
      { 
        status == 200 ? (<div>Votre message a bien été envoyé</div>) :
        status == 500 ? (<div>Une erreur s'est produite, merci de réessayer plus tard</div>) :
        null
      }
      <Form onSubmit={submitContactForm}>
        <Form.Input
          type="email"
          name='email'
          id="email"
          placeholder='Votre E-mail'
          className='contact-form-label'
          value={email}
          onChange={(event) => {
            dispatch(changeContactField(event.target.value, 'email'))
          }}
          />
        <Form.TextArea
          placeholder='Votre message'
          id="message"
          name='message'
          value={message}
          onChange={(event) => {
            dispatch(changeContactField(event.target.value, 'message'))
          }}
        />
        <Form.Button className="contact-send-button">Envoyer</Form.Button> 
      </Form>
    </div>
  )
}
