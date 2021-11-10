import axios from "axios";

import { SUBMIT_CONTACT } from 'src/actions/contact';

const contactMiddlewares = (store) => (next) => (action) => {
  switch (action.type) {
    case SUBMIT_CONTACT: {
      const state = store.getState();
      axios.post('https://o-projetheque.herokuapp.com/contact', {
      headers: { 'Access-Control-Allow-Origin': 'http://localhost:8080/login' },
      newMessage: state.contact.newMessage,
      contactMail: state.contact.contactMail,
      })
      .then((response) => {
        // const contactRes = response.data
        console.log(response)
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
