// ACTION TYPES
export const GET_RANDOM_PROJECTS = 'GET_RANDOM_PROJECTS'
export const SAVE_PROJECTS = 'SAVE_PROJECTS'
export const GET_ALL_PROJECTS = 'GET_ALL_PROJECTS'

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
})
