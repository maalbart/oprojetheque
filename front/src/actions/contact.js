// ACTION TYPES
export const SUBMIT_CONTACT = 'SUBMIT_CONTACT';
export const CHANGE_CONTACT_FIELD = 'CHANGE_CONTACT_FIELD';

// ACTION CREATORS
export const submitContact = () => ({
  type: SUBMIT_CONTACT,
})
export const changeContactField = (value, key) => ({
  type: CHANGE_CONTACT_FIELD,
  value,
  key,
})
