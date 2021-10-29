import { CHANGE_FIELD, SAVE_USER, HANDLE_DISCONNECT } from 'src/actions/user';

export const initialState = {
  logged: false,
  email: '',
  password: '',
  username: '',
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
        username: action.user.pseudo,
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
