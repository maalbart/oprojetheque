import { GET_ALL_PROMOS, SAVE_PROMOS, GET_ONE_PROMO, SAVE_ONE_PROMO, CHANGE_SEARCH } from 'src/actions/promos';

export const initialState = {
  list: [],
  loader: true,
  studentsByOnePromo: [],
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
        loader: false,
        studentsByOnePromo: action.promoData
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

export default promosReducer;
