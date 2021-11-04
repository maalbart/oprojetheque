import { GET_ALL_PROMOS, SAVE_PROMOS } from 'src/actions/promos';

export const initialState = {
  list: [],
  loader: true,
}

const promosReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case GET_ALL_PROMOS:
      return {
        ...state,
        loader: true,
      };
    case SAVE_PROMOS:
      return {
        ...state,
        list: action.list,
        loader: false,
      };
    default:
      return state;
  }
}

export default promosReducer;
