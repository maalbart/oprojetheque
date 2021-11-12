// ACTION TYPES
export const HANDLE_CHANGE_DROPDOWN_VALUE = 'HANDLE_CHANGE_DROPDOWN_VALUE'
export const SUBMIT_PROMO_FORM = 'SUBMIT_PROMO_FORM'
export const ADMIN_GET_ALL_PROMOS = 'ADMIN_GET_ALL_PROMOS'
export const ADMIN_SAVE_PROMOS = 'ADMIN_SAVE_PROMOS'
export const ADMIN_GET_ALL_STUDENT_FROM_PROMO = 'ADMIN_GET_ALL_STUDENT_FROM_PROMO'
export const ADMIN_SAVE_STUDENTS_FROM_PROMOS = 'ADMIN_SAVE_STUDENTS_FROM_PROMOS'
export const CHANGE_FIELD = 'CHANGE_FIELD';
export const ADD_PROMO = 'ADD_PROMO'

// ACTION CREATORS
export const changeField = (value, key) => ({
  type: CHANGE_FIELD,
  value,
  key,
});
export const handleChangeDropdownValue = (value) => ({
  type: HANDLE_CHANGE_DROPDOWN_VALUE,
  value,
})
export const submitPromoForm = () => ({
  type : SUBMIT_PROMO_FORM,
})
export const addPromo = () => ({
  type : ADD_PROMO,
})
export const adminGetAllPromos = () => ({
  type: ADMIN_GET_ALL_PROMOS,
})
export const adminSavePromos = (promos) => ({
  type: ADMIN_SAVE_PROMOS,
  promos,
})
export const adminGetStudentsFromPromo = () => ({
  type: ADMIN_GET_ALL_STUDENT_FROM_PROMO,
})
export const adminSaveStudentsFromPromos = (studentsFromPromo) => ({
  type: ADMIN_SAVE_STUDENTS_FROM_PROMOS,
  studentsFromPromo,
})
