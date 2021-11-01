import { GET_RANDOM_PROJECTS, SAVE_PROJECTS } from "src/actions/projects";

export const initialState = {
  list: [],
}

const projectsReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case GET_RANDOM_PROJECTS:
      return {
        ...state
      };
    case SAVE_PROJECTS: {
      return {
        ...state,
        list: action.list,
      }
    }
    default:
      return state;
  }
}

export default projectsReducer;
