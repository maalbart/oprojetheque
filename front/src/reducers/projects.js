import { GET_RANDOM_PROJECTS } from "src/actions/projects";

export const initialState = {
  list: [],
}

const projectsReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case GET_RANDOM_PROJECTS:
      return {
        ...state
      };
    default:
      return state;
  }
}

export default projectsReducer;
