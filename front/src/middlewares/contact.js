import axios from "axios";

import { SUBMIT_CONTACT, saveEmailStatus } from 'src/actions/contact';

const contactMiddlewares = (store) => (next) => (action) => {
  switch (action.type) {
    case SUBMIT_CONTACT: {
      const state = store.getState();
      axios.post('https://o-projetheque.herokuapp.com/contact', {
      headers: { 'Access-Control-Allow-Origin': 'http://localhost:8080/login' },
      email: state.contact.email,
      message: state.contact.message,
      })
      .then((response) => {
        const res = response.status
        console.log(res)
        store.dispatch(saveEmailStatus(res))
      })
      .catch((error) => {
        console.error(error);
      })
      break;
    }
    default:
      next(action);
  }
};

export default contactMiddlewares;
