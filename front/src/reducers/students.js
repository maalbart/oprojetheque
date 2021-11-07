import { GET_ALL_STUDENTS, SAVE_STUDENTS, SAVE_ONE_STUDENT, GET_ONE_STUDENT } from 'src/actions/students';

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
    case GET_ONE_STUDENT:
      return {
        ...state,
        loader: true,
      };
    case SAVE_ONE_STUDENT:
      return {
        ...state,
        loader: false,
        oneStudent: action.studentData
      }
    default:
      return state;
  }
}

export default studentsReducer;
