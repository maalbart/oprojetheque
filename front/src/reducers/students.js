import { GET_ALL_STUDENTS, SAVE_STUDENTS, SAVE_ONE_STUDENT, GET_ONE_STUDENT, CHANGE_SEARCH } from 'src/actions/students';

export const initialState = {
  list: [],
  loader: true,
  search: ''
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
    case CHANGE_SEARCH:
      return {
        ...state,
        [action.key]: action.value
      }
    default:
      return state;
  }
}

export default studentsReducer;
