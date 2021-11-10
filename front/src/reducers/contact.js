import { SUBMIT_CONTACT, CHANGE_CONTACT_FIELD } from 'src/actions/contact';

export const initialState = {
  newMessage: '',
  contactMail: '',
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
    default:
      return state;
  }
};

export default contactReducer;
