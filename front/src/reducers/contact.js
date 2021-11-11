import { SUBMIT_CONTACT, CHANGE_CONTACT_FIELD, SAVE_EMAIL_STATUS } from 'src/actions/contact';

export const initialState = {
  message: '',
  email: '',
  status: ''
};

const contactReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SUBMIT_CONTACT:
      return {
      ...state
    };
    case CHANGE_CONTACT_FIELD:
      return {
        ...state,
        [action.key]: action.value
      }
    case SAVE_EMAIL_STATUS:
      return {
        ...state,
        status: action.res,
        message: '',
        email: '',
      }
    default:
      return state;
  }
};

export default contactReducer;
