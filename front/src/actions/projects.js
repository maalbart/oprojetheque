// ACTION TYPES
export const GET_RANDOM_PROJECTS = 'GET_RANDOM_PROJECTS'
export const SAVE_PROJECTS = 'SAVE_PROJECTS'
export const GET_ALL_PROJECTS = 'GET_ALL_PROJECTS'
export const GET_ONE_PROJECT = 'GET_ONE_PROJECT'
export const SAVE_ONE_PROJECT = 'SAVE_ONE_PROJECT'
export const CHANGE_SEARCH_PROJECT = 'CHANGE_SEARCH_PROJECT'

// ACTION CREATORS
export const getRandomProjects = () => ({
  type: GET_RANDOM_PROJECTS,
});
export const saveProjects = (list) => ({
  type: SAVE_PROJECTS,
  list,
});
export const getAllProjects = () => ({
  type: GET_ALL_PROJECTS, 
});
export const getOneProject = (id) => ({
  type: GET_ONE_PROJECT,
  id
});
export const saveOneProject = (projectData) => ({
  type: SAVE_ONE_PROJECT,
  projectData
});
export const changeSearchProject = (value, key) => ({
  type: CHANGE_SEARCH_PROJECT,
  key,
  value
})
