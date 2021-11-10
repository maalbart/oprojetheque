import React from "react";
import axios from "axios";
import { Form } from 'semantic-ui-react';
import './style.scss';
import { submitContact, changeContactField } from "src/actions/contact";
import { useDispatch, useSelector } from "react-redux";

export default function Contact () {
  const dispatch = useDispatch()
  const { contactMail, newMessage } = useSelector((state) => ({
    contactMail: state.contact.contactMail,
    newMessage: state.contact.newMessage
  }))
  const submitContactForm = (evt) => {
    evt.preventDefault();
    console.log(evt)
    dispatch(submitContact())
  }
  return (
    <div className="contact-form">
      <h2 className="contact-form-title">Nous contacter</h2>
      <Form onSubmit={submitContactForm}>
        <Form.Input
          type="email"
          name='contactMail'
          placeholder='Votre E-mail'
          className='contact-form-label'
          value={contactMail}
          onChange={(event) => {
            dispatch(changeContactField(event.target.value, 'contactMail'))
          }}
          />
        <Form.TextArea
          placeholder='Votre message'
          name='newMessage'
          value={newMessage}
          onChange={(event) => {
            dispatch(changeContactField(event.target.value, 'newMessage'))
          }}
        />
        <Form.Button>Envoyer</Form.Button> 
      </Form>
    </div>
  )
}
