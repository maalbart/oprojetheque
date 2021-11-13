import axios from 'axios';

import { HANDLE_LOGIN, saveUser } from 'src/actions/user';

const user = (store) => (next) => (action) => {
  switch (action.type) {
    case HANDLE_LOGIN: {
      const state = store.getState();
      console.log('on est bien dans mon handlelogin');
      console.log(state.user.email, state.user.password)
      axios.post('https://o-projetheque.herokuapp.com/connection', {
        headers: { 'Access-Control-Allow-Origin': 'http://localhost:8080/login' },
        email: state.user.email,
        password: state.user.password,
      })
        .then((response) => {
          console.log(response.data)
          const actionSaveUser = saveUser(response.data);
          console.log(actionSaveUser);
          store.dispatch(actionSaveUser);
        })
        .catch((error) => {
          console.error(error);
        });
      break;
    }
    default:
      next(action);
  }
};

export default user;
