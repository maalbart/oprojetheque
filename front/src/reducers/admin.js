import { HANDLE_CHANGE_DROPDOWN_VALUE, ADMIN_SAVE_PROMOS, ADMIN_GET_ALL_PROMOS, ADMIN_GET_ALL_STUDENT_FROM_PROMO, ADMIN_SAVE_STUDENTS_FROM_PROMOS, CHANGE_FIELD } from "src/actions/admin";

export const initialState = {
  promos : [],
  loader: true,
  dropdownValue: '',
  studentsFromPromo: [],
  projectName: '',
  selectedPromo: '',
  selectedStudent: '',
}

const adminReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_FIELD:
      return {
        ...state,
        [action.key]: action.value,
      };
    case HANDLE_CHANGE_DROPDOWN_VALUE:
      return {
        ...state,
        dropdownValue: action.value
      };
    case ADMIN_GET_ALL_PROMOS:
      return {
        ...state,
        loader: true
      }
    case ADMIN_GET_ALL_STUDENT_FROM_PROMO:
      return {
        ...state,
        loader: true
      }
    case ADMIN_SAVE_PROMOS:
      return {
        ...state,
        promos: action.promos,
        loader: false
      }
    case ADMIN_SAVE_STUDENTS_FROM_PROMOS:
      return {
        ...state,
        studentsFromPromo: action.studentsFromPromo,
        loader: false
      }
    default:
      return state;
  }
}

export default adminReducer;
