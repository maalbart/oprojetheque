import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { changeField, handleLogin, handleDisconnect } from 'src/actions/user'
import { Button, Checkbox, Form } from "semantic-ui-react";
import Field from './Field';


export default function Login () {
  const dispatch = useDispatch();
  const {
    isLogged,
    email,
    password,
    loggedMessage,
    username,
  } = useSelector((state) => ({
    isLogged: state.user.logged,
    email: state.user.email,
    password: state.user.password,
    loggedMessage: state.user.loggedMessage,
    username: state.user.username,
  }));
  const handleSubmit = (evt) => {
    evt.preventDefault();
    dispatch(handleLogin());
  };
  const onChange = (evt) => {
    dispatch(changeField(evt.target.value), 'email')
  }
  return (
    <form autoComplete="off" className="login-form-element" onSubmit={handleSubmit}>
          <Field
            name="email"
            placeholder="Adresse Email"
            value={email}
            onChange={(event) => {
              dispatch(changeField(event.target.value, 'email'));
            }}
          />
          <Field
            name="password"
            type="password"
            placeholder="Mot de passe"
            value={password}
            onChange={(event) => {
              dispatch(changeField(event.target.value, 'password'));
            }}
          />
          <button
            type="submit"
            className="login-form-button"
          >
            OK
          </button>
        </form>
  )
}

// se souvenir de ma session ou autre ? a voir 

