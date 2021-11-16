import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { changeField, handleLogin } from 'src/actions/user'
import Field from './Field';
import './style.scss';


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
  
  return (
    <div className="login-form">
      <p className="login-form-description">Connectez-vous</p>
    <form autoComplete="off" className="login-form-element" onSubmit={handleSubmit}>
        <div className="login-form-email">
          <Field
            name="email"
            placeholder="Adresse Email"
            value={email}
            onChange={(event) => {
              dispatch(changeField(event.target.value, 'email'));
            }}
          />
        </div>
        <div className="login-form-password">
          <Field
            name="password"
            type="password"
            placeholder="Mot de passe"
            value={password}
            onChange={(event) => {
              dispatch(changeField(event.target.value, 'password'));
            }}
          />
        </div>
        <div className="login-form-submit">
          <button
            type="submit"
            className="login-form-button"
          >
            OK
          </button>
        </div>
        </form>
        </div>
  )
}

// se souvenir de ma session ou autre ? a voir 

