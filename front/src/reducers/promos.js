import { GET_ALL_PROMOS, SAVE_PROMOS, GET_ONE_PROMO, SAVE_ONE_PROMO, CHANGE_SEARCH_PROMOS } from 'src/actions/promos';

export const initialState = {
  list: [],
  loader: true,
  studentsByOnePromo: {
    promoId: {
      id: 1,
      name: '',
      logo: '',
      starting_date: '',
      ending_date: '',
    },
    studentsFromPromo: []
  },
  search: ''
}

const promosReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case GET_ALL_PROMOS:
      return {
        ...state,
        loader: true,
      };
    case GET_ONE_PROMO:
      return {
        ...state,
        loader: true
      }
    case SAVE_PROMOS:
      return {
        ...state,
        list: action.list,
        loader: false,
      };
    case SAVE_ONE_PROMO:
      return {
        ...state,
        studentsByOnePromo: action.promoData,
        loader: false,
      }
    case CHANGE_SEARCH_PROMOS:
      return {
        ...state,
        [action.key]: action.value
      }
    default:
      return state;
  }
}

export default promosReducer;
