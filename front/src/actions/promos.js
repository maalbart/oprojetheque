// ACTION TYPES
export const GET_ALL_PROMOS = 'GET_ALL_PROMOS'
export const SAVE_PROMOS = 'SAVE_PROMOS'
export const GET_ONE_PROMO = 'GET_ONE_PROMO'
export const SAVE_ONE_PROMO = 'SAVE_ONE_PROMO'
export const CHANGE_SEARCH_PROMOS = 'CHANGE_SEARCH_PROMOS'

// ACTION CREATORS
export const getAllPromos = () => ({
  type: GET_ALL_PROMOS,
})
export const getOnePromo = (id) => ({
  type: GET_ONE_PROMO,
  id
})
export const savePromos = (list) => ({
  type: SAVE_PROMOS,
  list,
})
export const saveOnePromo = (promoData) => ({
  type: SAVE_ONE_PROMO,
  promoData,
});
export const changeSearchPromos = (value, key) => ({
  type: CHANGE_SEARCH_PROMOS,
  key,
  value
})
