// ACTION TYPES
export const SUBMIT_CONTACT = 'SUBMIT_CONTACT';
export const CHANGE_CONTACT_FIELD = 'CHANGE_CONTACT_FIELD';
export const SAVE_EMAIL_STATUS = 'SAVE_EMAIL_STATUS';

// ACTION CREATORS
export const submitContact = () => ({
  type: SUBMIT_CONTACT,
})
export const changeContactField = (value, key) => ({
  type: CHANGE_CONTACT_FIELD,
  value,
  key,
})
export const saveEmailStatus = (res) => ({
  type: SAVE_EMAIL_STATUS,
  res,
})
