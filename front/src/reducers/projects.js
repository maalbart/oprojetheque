import { GET_RANDOM_PROJECTS, SAVE_PROJECTS, GET_ALL_PROJECTS } from "src/actions/projects";

export const initialState = {
  list: [],
}

const projectsReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case GET_RANDOM_PROJECTS:
      return {
        ...state
      };
    case SAVE_PROJECTS:
      return {
        ...state,
        list: action.list,
      }
    case GET_ALL_PROJECTS:
      return {
        ...state
      }
    default:
      return state;
  }
}

export default projectsReducer;
