import { GET_ALL_STUDENTS, SAVE_STUDENTS } from 'src/actions/students';

export const initialState = {
  list: [],
  loader: true
}

const studentsReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case GET_ALL_STUDENTS:
      return {
        ...state,
        loader: true,
      };
    case SAVE_STUDENTS:
      return {
        ...state,
        list: action.list,
        loader: false,
      };
    default:
      return state;
  }
}

export default studentsReducer;
