import { GET_ALL_STUDENTS, SAVE_STUDENTS, SAVE_ONE_STUDENT, GET_ONE_STUDENT, CHANGE_SEARCH } from 'src/actions/students';

export const initialState = {
  list: [],
  loader: true,
  search: '',
  oneStudent: {
    studentId: {
      id: 0,
      firstname: '',
      lastname: '',
      email: '',
      password: '',
      biography: '',
      avatar: '',
      id_promo: 1,
      id_project: 1,
      id_therole: 2
    },
    projectFromStudent: [{
      id: 0,
      name: '',
      logo: '',
      description: '',
      site_link: '',
      youtube_link: '',
      id_promo: '',
      firstname: '',
      lastname: '',
      biography: '',
      avatar: '',
      id_project: 1,
      id_therole: 2,
    }],
    promoFromStudent: [{
      id: 0,
      name: '',
      logo: '',
      starting_date: '',
      ending_date: '',
      firstname: '',
      lastname: '',
      biography: '',
      avatar: '',
      id_promo: 1,
      id_project: 1,
      id_therole: 2,
    }]
  }
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
