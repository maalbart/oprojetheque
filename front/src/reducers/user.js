import { CHANGE_FIELD, SAVE_USER, HANDLE_DISCONNECT } from 'src/actions/user';

export const initialState = {
  logged: false,
  email: '',
  password: '',
  role: '',
  firstname: '',
  lastname: '',
  loggedMessage: 'Bienvenue',
};

const userReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_FIELD:
      return {
        ...state,
        [action.key]: action.value,
      };
    case SAVE_USER:
      return {
        ...state,
        firstname: action.user.firstname,
        lastname: action.user.lastname,
        role: action.user.id_therole,
        logged: true,
      };
    case HANDLE_DISCONNECT:
      return {
        ...state,
        email: '',
        password: '',
        username: '',
        logged: false,
      };
    default:
      return state;
  }
};

export default userReducer;
