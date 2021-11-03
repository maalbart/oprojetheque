// ACTION TYPES
export const GET_ALL_PROMOS = 'GET_ALL_PROMOS'
export const SAVE_PROMOS = 'SAVE_PROMOS'

// ACTION CREATORS
export const getAllPromos = () => ({
  type: GET_ALL_PROMOS,
})
export const savePromos = (list) => ({
  type: SAVE_PROMOS,
  list,
})
