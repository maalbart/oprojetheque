// ACTION TYPES
export const CHANGE_FIELD = 'CHANGE_FIELD';
export const HANDLE_LOGIN = 'HANDLE_LOGIN';
export const HANDLE_DISCONNECT = 'HANDLE_DISCONNECT';
export const SAVE_USER = 'SAVE_USER';
export const GET_PROFILE_FROM_USER = 'GET_PROFILE_FROM_USER';

// ACTION CREATORS
export const changeField = (value, key) => ({
  type: CHANGE_FIELD,
  value,
  key,
});
export const handleLogin = () => ({
  type: HANDLE_LOGIN,
});
export const saveUser = (user) => ({
  type: SAVE_USER,
  user,
});
export const handleDisconnect = () => ({
  type: HANDLE_DISCONNECT,
});
export const getProfileFromUser = () => ({
  type: GET_PROFILE_FROM_USER,
})
