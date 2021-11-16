import { GET_RANDOM_PROJECTS, SAVE_PROJECTS, GET_ALL_PROJECTS, GET_ONE_PROJECT, SAVE_ONE_PROJECT, CHANGE_SEARCH_PROJECT } from "src/actions/projects";

export const initialState = {
  list: [],
  loader: true,
  search: '',
  oneProject: {
    projectId: {
      id: 0,
      name: '',
      logo: '',
      description: '',
      site_link: '',
      site_screen: '',
      youtube_link: '',
      id_promo: 1
    },
    promoFromProject: {
      id: 1,
      name: '',
      logo: '',
      starting_date: '',
      ending_date: ''
    },
    studentFromProject: []
  }
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
    case CHANGE_SEARCH_PROJECT:
      return {
        ...state,
        [action.key]: action.value
      }
    default:
      return state;
  }
}

export default projectsReducer;
