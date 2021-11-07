import { GET_RANDOM_PROJECTS, SAVE_PROJECTS, GET_ALL_PROJECTS, GET_ONE_PROJECT, SAVE_ONE_PROJECT } from "src/actions/projects";

export const initialState = {
  list: [],
  loader: true,
}

const projectsReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case GET_RANDOM_PROJECTS:
      return {
        ...state,
        loader: true,
      };
    case SAVE_PROJECTS:
      return {
        ...state,
        list: action.list,
        loader: false,
      }
    case GET_ALL_PROJECTS:
      return {
        ...state,
        loader: true
      }
    case GET_ONE_PROJECT:
      return {
        ...state,
        loader: true,
      }
    case SAVE_ONE_PROJECT:
      return {
        ...state,
        loader: false,
        oneProject: action.projectData
      }
    default:
      return state;
  }
}

export default projectsReducer;
