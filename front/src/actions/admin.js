// ACTION TYPES
export const HANDLE_CHANGE_DROPDOWN_VALUE = 'HANDLE_CHANGE_DROPDOWN_VALUE'
export const SUBMIT_PROMO_FORM = 'SUBMIT_PROMO_FORM'

// ACTION CREATORS
export const handleChangeDropdownValue = (value) => ({
  type: HANDLE_CHANGE_DROPDOWN_VALUE,
  value,
})
export const submitPromoForm = () => ({
  type : SUBMIT_PROMO_FORM,
})

