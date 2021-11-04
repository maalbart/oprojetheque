import { HANDLE_ITEM_CLICK } from "src/actions/admin";

export const initialState = {
  list: [],
  activeItem: 'Ajouter Projet',
}

const adminReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case HANDLE_ITEM_CLICK:
      return {
        ...state,
        activeItem: action.value
      };
    default:
      return state;
  }
}

export default adminReducer;
